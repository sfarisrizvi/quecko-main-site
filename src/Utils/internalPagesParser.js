import fs from 'fs';
import path from 'path';

const CATEGORY_MAP = {
  "ai-development": {
    folder: "AI Development & Intelligent Systems",
    name: "AI Development & Intelligent Systems"
  },
  "automation-engagement": {
    folder: "Automation & Customer Engagement",
    name: "Automation & Customer Engagement"
  },
  "dedicated-teams": {
    folder: "Dedicated Engineering Teams",
    name: "Dedicated Engineering Teams"
  },
  "teams": {
    folder: "Dedicated Engineering Teams",
    name: "Dedicated Engineering Teams"
  },
  "ecommerce-cms": {
    folder: "E-Commerce & CMS Solutions",
    name: "E-Commerce & CMS Solutions"
  },
  "gaming-igaming": {
    folder: "Gaming & iGaming Solutions",
    name: "Gaming & iGaming Solutions"
  },
  "growth-branding": {
    folder: "Growth, Branding & Go-To-Market",
    name: "Growth, Branding & Go-To-Market"
  },
  "mobile-app-development": {
    folder: "Mobile App Development",
    name: "Mobile App Development"
  },
  "saas-platforms": {
    folder: "SaaS Platforms & Enterprise Software",
    name: "SaaS Platforms & Enterprise Software"
  },
  "web3": {
    folder: "Web3 & Blockchain Engineering",
    name: "Web3 & Blockchain Engineering"
  },
  "web3-blockchain-engineering": {
    folder: "Web3 & Blockchain Engineering",
    name: "Web3 & Blockchain Engineering"
  }
};

function parseMarkdownContent(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { frontmatter: {}, body: content };

  const frontmatter = {};
  const yamlText = match[1];
  const lines = yamlText.split('\n');
  
  for (const line of lines) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();

    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map(item => item.trim().replace(/^['"]|['"]$/g, ''));
    } else {
      value = value.replace(/^['"]|['"]$/g, '');
    }
    frontmatter[key] = value;
  }

  const body = content.slice(match[0].length).trim();
  return { frontmatter, body };
}

function parseSectionContent(key, content) {
  const result = { raw: content };

  const subParts = content.split(/(?:\r?\n|^)###\s+/);
  const parsedSubs = {};
  for (const sub of subParts) {
    if (!sub.trim()) continue;
    const lines = sub.split(/\r?\n/);
    const subTitle = lines[0].trim().toLowerCase();
    const subContent = lines.slice(1).join('\n').trim();
    parsedSubs[subTitle] = subContent;
  }

  const cleanText = (txt) => txt.replace(/---/g, '').trim();

  if (key === 'hero') {
    result.headline = cleanText(parsedSubs['headline'] || '');
    result.subhead = cleanText(parsedSubs['subhead'] || '');
    const ctas = [];
    const ctaMatches = (parsedSubs['cta'] || '').match(/\[([^\]]+)\]/g);
    if (ctaMatches) {
      ctaMatches.forEach(m => ctas.push(cleanText(m.slice(1, -1))));
    }
    result.ctas = ctas;
  } 
  else if (key === 'microTrust') {
    result.items = content.split(/\r?\n/)
      .map(line => line.trim())
      .filter(line => line.startsWith('-') && !/^-+$/.test(line))
      .map(line => cleanText(line.replace(/^-\s+/, '')))
      .filter(Boolean);
  } 
  else if (key === 'challenge') {
    result.headline = cleanText(parsedSubs['headline'] || '');
    result.body = cleanText(parsedSubs['body'] || '');
  } 
  else if (key === 'capabilities') {
    result.headline = cleanText(parsedSubs['headline'] || '');
    const gridContent = parsedSubs['grid'] || '';
    const items = [];
    const lines = gridContent.split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('-') && !/^-+$/.test(trimmed)) {
        const match = trimmed.match(/^-\s+\*\*([^*]+):\*\*\s*(.*)$/);
        if (match) {
          items.push({ title: cleanText(match[1]), desc: cleanText(match[2]) });
        } else {
          items.push({ title: '', desc: cleanText(trimmed.replace(/^-\s+/, '')) });
        }
      }
    }
    result.items = items;
  } 
  else if (key === 'targetQualifier') {
    const listContent = parsedSubs['who this is for'] || content;
    const idealFit = [];
    const notFit = [];
    
    const lines = listContent.split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('-') && !/^-+$/.test(trimmed)) {
        const matchIdeal = trimmed.match(/^-\s+\*\*Ideal Fit:\*\*\s*(.*)$/i);
        const matchNot = trimmed.match(/^-\s+\*\*Not a Fit:\*\*\s*(.*)$/i);
        
        if (matchIdeal) {
          idealFit.push(cleanText(matchIdeal[1]));
        } else if (matchNot) {
          notFit.push(cleanText(matchNot[1]));
        } else {
          if (trimmed.toLowerCase().includes('ideal fit')) {
            idealFit.push(cleanText(trimmed.replace(/^-\s+\*\*Ideal Fit:\*\*\s*/i, '').replace(/^-\s+/, '')));
          } else {
            notFit.push(cleanText(trimmed.replace(/^-\s+\*\*Not a Fit:\*\*\s*/i, '').replace(/^-\s+/, '')));
          }
        }
      }
    }
    result.idealFit = idealFit.filter(Boolean);
    result.notFit = notFit.filter(Boolean);
  } 
  else if (key === 'process') {
    result.headline = cleanText(parsedSubs['headline'] || '');
    const stepContent = parsedSubs['step-by-step'] || content;
    const steps = [];
    const lines = stepContent.split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (/^\d+\./.test(trimmed) && !/^-+$/.test(trimmed)) {
        const match = trimmed.match(/^\d+\.\s+\*\*([^*]+):\*\*\s*(.*)$/);
        if (match) {
          steps.push({ title: cleanText(match[1]), desc: cleanText(match[2]) });
        } else {
          steps.push({ title: '', desc: cleanText(trimmed.replace(/^\d+\.\s+/, '')) });
        }
      }
    }
    result.steps = steps;
  } 
  else if (key === 'blueprint') {
    result.headline = cleanText(parsedSubs['headline'] || '');
    const timelineContent = parsedSubs['timeline'] || content;
    const timeline = [];
    const lines = timelineContent.split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('-') && !/^-+$/.test(trimmed)) {
        const match = trimmed.match(/^-\s+\*\*([^*]+):\*\*\s*(.*)$/);
        if (match) {
          timeline.push({ timeframe: cleanText(match[1]), desc: cleanText(match[2]) });
        } else {
          timeline.push({ timeframe: '', desc: cleanText(trimmed.replace(/^-\s+/, '')) });
        }
      }
    }
    result.timeline = timeline;
  } 
  else if (key === 'techStack') {
    result.headline = cleanText(parsedSubs['headline'] || '');
    const stackContent = parsedSubs['stack'] || content;
    const categories = [];
    const lines = stackContent.split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('-') && !/^-+$/.test(trimmed)) {
        const match = trimmed.match(/^-\s+\*\*([^*]+):\*\*\s*(.*)$/);
        if (match) {
          const items = match[2].split(/,\s*(?![^()]*\))/).map(s => cleanText(s)).filter(Boolean);
          categories.push({ name: cleanText(match[1]), items });
        }
      }
    }
    result.categories = categories;
  } 
  else if (key === 'whyChoose') {
    result.headline = cleanText(parsedSubs['headline'] || '');
    const diffContent = parsedSubs['differentiators'] || content;
    const items = [];
    const lines = diffContent.split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('-') && !/^-+$/.test(trimmed)) {
        const match = trimmed.match(/^-\s+\*\*([^*]+):\*\*\s*(.*)$/);
        if (match) {
          items.push({ title: cleanText(match[1]), desc: cleanText(match[2]) });
        } else {
          items.push({ title: '', desc: cleanText(trimmed.replace(/^-\s+/, '')) });
        }
      }
    }
    result.items = items;
  } 
  else if (key === 'socialProof') {
    const quotes = [];
    const lines = content.split(/\r?\n/);
    let currentQuote = null;
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('>') && !/^-+$/.test(trimmed)) {
        const text = cleanText(trimmed.replace(/^>\s*/, ''));
        if (text.startsWith('"') || text.startsWith('“')) {
          if (currentQuote) quotes.push(currentQuote);
          currentQuote = { quote: text.replace(/^["“]|["”]$/g, ''), author: '', title: '' };
        } else if (text.startsWith('**') && currentQuote) {
          const matchAuthor = text.match(/^\*\*([^*]+)\*\*,\s*(.*)$/);
          if (matchAuthor) {
            currentQuote.author = cleanText(matchAuthor[1]);
            currentQuote.title = cleanText(matchAuthor[2]);
          } else {
            currentQuote.author = cleanText(text.replace(/^\*\*|\*\*$/g, ''));
          }
        }
      }
    }
    if (currentQuote) quotes.push(currentQuote);
    result.quotes = quotes;
  } 
  else if (key === 'engagement') {
    const items = [];
    const lines = content.split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('-') && !/^-+$/.test(trimmed)) {
        const match = trimmed.match(/^-\s+\*\*([^*]+):\*\*\s*(.*)$/);
        if (match) {
          items.push({ name: cleanText(match[1]), desc: cleanText(match[2]) });
        } else {
          items.push({ name: '', desc: cleanText(trimmed.replace(/^-\s+/, '')) });
        }
      }
    }
    result.items = items;
  } 
  else if (key === 'faqs') {
    const faqs = [];
    const lines = content.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
    let currentFaq = null;
    for (const line of lines) {
      if (line.startsWith('**') && line.endsWith('**')) {
        if (currentFaq) faqs.push(currentFaq);
        currentFaq = { q: cleanText(line.replace(/^\*\*|\*\*$/g, '')), a: '' };
      } else if (currentFaq) {
        currentFaq.a += (currentFaq.a ? '\n' : '') + cleanText(line);
      }
    }
    if (currentFaq) {
      currentFaq.a = cleanText(currentFaq.a);
      faqs.push(currentFaq);
    }
    result.faqs = faqs;
  } 
  else if (key === 'finalCta') {
    result.headline = cleanText(parsedSubs['headline'] || '');
    result.body = cleanText(parsedSubs['body'] || '');
    const ctas = [];
    const ctaMatches = (parsedSubs['cta'] || '').match(/\[([^\]]+)\]/g);
    if (ctaMatches) {
      ctaMatches.forEach(m => ctas.push(cleanText(m.slice(1, -1))));
    }
    result.ctas = ctas;
  }

  return result;
}

function parseSections(body) {
  const sections = {};
  const rawSections = body.split(/(?:\r?\n|^)##\s+/);

  for (const section of rawSections) {
    if (!section.trim()) continue;

    const lines = section.split(/\r?\n/);
    const titleLine = lines[0].trim();
    const rest = lines.slice(1).join('\n').trim();

    let key = titleLine.toLowerCase();
    if (key.includes('1. hero')) key = 'hero';
    else if (key.includes('1.5. micro-trust')) key = 'microTrust';
    else if (key.includes('2. the challenge')) key = 'challenge';
    else if (key.includes('3. core capabilities')) key = 'capabilities';
    else if (key.includes('3.5. target qualifier')) key = 'targetQualifier';
    else if (key.includes('4. our process')) key = 'process';
    else if (key.includes('5. project blueprint')) key = 'blueprint';
    else if (key.includes('6. tech stack')) key = 'techStack';
    else if (key.includes('7. why choose quecko')) key = 'whyChoose';
    else if (key.includes('8. portfolio')) key = 'portfolio';
    else if (key.includes('8.5. service-specific social proof') || key.includes('social proof')) key = 'socialProof';
    else if (key.includes('9. team')) key = 'team';
    else if (key.includes('10. blog')) key = 'blog';
    else if (key.includes('11. engagement')) key = 'engagement';
    else if (key.includes('12. faqs')) key = 'faqs';
    else if (key.includes('13. final cta')) key = 'finalCta';

    sections[key] = parseSectionContent(key, rest);
  }

  return sections;
}

export function getInternalPageData(categorySlug, subCategorySlug) {
  const categoryInfo = CATEGORY_MAP[categorySlug];
  if (!categoryInfo) return null;

  const baseDir = path.join(process.cwd(), "content/Internal Pages", categoryInfo.folder);
  if (!fs.existsSync(baseDir)) return null;

  const files = fs.readdirSync(baseDir);
  for (const file of files) {
    if (!file.endsWith(".md")) continue;

    const filePath = path.join(baseDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { frontmatter, body } = parseMarkdownContent(content);

    if (frontmatter.slug) {
      const parts = frontmatter.slug.split("/").filter(Boolean);
      if (parts.length === 3 && parts[1] === categorySlug && parts[2] === subCategorySlug) {
        return { frontmatter, sections: parseSections(body), categoryName: categoryInfo.name };
      }
    }
  }

  // Fallback: search across all folders if categorySlug mismatch
  const allFolders = fs.readdirSync(path.join(process.cwd(), "content/Internal Pages"));
  for (const folder of allFolders) {
    const fullFolderPath = path.join(process.cwd(), "content/Internal Pages", folder);
    if (!fs.statSync(fullFolderPath).isDirectory()) continue;

    const files = fs.readdirSync(fullFolderPath);
    for (const file of files) {
      if (!file.endsWith(".md")) continue;

      const filePath = path.join(fullFolderPath, file);
      const content = fs.readFileSync(filePath, "utf-8");
      const { frontmatter, body } = parseMarkdownContent(content);

      if (frontmatter.slug) {
        const parts = frontmatter.slug.split("/").filter(Boolean);
        if (parts.length === 3 && parts[2] === subCategorySlug) {
          const matchingCatInfo = Object.entries(CATEGORY_MAP).find(([k, v]) => v.folder === folder);
          const categoryName = matchingCatInfo ? matchingCatInfo[1].name : folder;
          return { frontmatter, sections: parseSections(body), categoryName };
        }
      }
    }
  }

  return null;
}

export function getAllInternalPages() {
  const params = [];
  const baseDir = path.join(process.cwd(), "content/Internal Pages");
  if (!fs.existsSync(baseDir)) return [];

  const folders = fs.readdirSync(baseDir);
  for (const folder of folders) {
    const categoryPath = path.join(baseDir, folder);
    if (!fs.statSync(categoryPath).isDirectory()) continue;

    const files = fs.readdirSync(categoryPath);
    for (const file of files) {
      if (!file.endsWith(".md")) continue;

      const filePath = path.join(categoryPath, file);
      const content = fs.readFileSync(filePath, "utf-8");
      const { frontmatter } = parseMarkdownContent(content);

      if (frontmatter.slug) {
        const parts = frontmatter.slug.split("/").filter(Boolean);
        if (parts.length === 3 && parts[0] === "services") {
          params.push({
            categorySlug: parts[1],
            subCategorySlug: parts[2]
          });
        }
      }
    }
  }
  return params;
}
