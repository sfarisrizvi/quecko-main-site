"use client";

import React, { useState } from "react";

const CHAIN_METADATA = {
  ethereum: {
    color: '#627EEA',
    bgGradient: 'linear-gradient(135deg, rgba(98, 126, 234, 0.08) 0%, rgba(98, 126, 234, 0.01) 100%)',
    shadow: '0 20px 40px rgba(98, 126, 234, 0.12)',
    tagline: 'The Standard for Smart Contracts',
    features: ['Solidity & Vyper engineering', 'EVM-compatible dApp scale', 'Sophisticated gas optimization', 'ERC-20, ERC-721, ERC-1155 standards'],
    svg: (color) => (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke={color} strokeWidth="1.5">
        <path d="M12 2L4 11.5L12 16L20 11.5L12 2Z" />
        <path d="M12 16L4 11.5L12 22L20 11.5L12 16Z" />
        <path d="M12 2V16" />
        <path d="M12 16V22" />
      </svg>
    )
  },
  solana: {
    color: '#14F195',
    bgGradient: 'linear-gradient(135deg, rgba(20, 241, 149, 0.08) 0%, rgba(153, 69, 255, 0.08) 100%)',
    shadow: '0 20px 40px rgba(153, 69, 255, 0.12)',
    tagline: 'High-Throughput Speed',
    features: ['Rust-based program engineering', 'High-frequency DeFi protocols', 'Anchor framework audit-readiness', 'Dynamic parallel processing'],
    svg: (color) => (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke={color} strokeWidth="1.8">
        <path d="M4 6h16l-3 4H1L4 6z" fill={color} opacity="0.85" />
        <path d="M20 12H4l3 4h16l-3-4z" fill={color} />
        <path d="M4 18h16l-3 4H1L4 18z" fill={color} opacity="0.85" />
      </svg>
    )
  },
  bsc: {
    color: '#F3BA2F',
    bgGradient: 'linear-gradient(135deg, rgba(243, 186, 47, 0.08) 0%, rgba(243, 186, 47, 0.01) 100%)',
    shadow: '0 20px 40px rgba(243, 186, 47, 0.12)',
    tagline: 'Fast and Cost-Effective',
    features: ['High-performance BEP-20 tokens', 'BSC-optimized smart contracts', 'Cross-chain bridge integration', 'PancakeSwap & DeFi ecosystem hooks'],
    svg: (color) => (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke={color} strokeWidth="1.5">
        <path d="M12 2L5 9l7 7 7-7-7-7z" />
        <path d="M5 9l-4 4 4 4 4-4-4-4z" />
        <path d="M19 9l-4 4 4 4 4-4-4-4z" />
        <path d="M12 16l-7 7 7 7 7-7-7-7z" />
      </svg>
    )
  },
  cardano: {
    color: '#0033AD',
    bgGradient: 'linear-gradient(135deg, rgba(0, 51, 173, 0.08) 0%, rgba(0, 51, 173, 0.01) 100%)',
    shadow: '0 20px 40px rgba(0, 51, 173, 0.12)',
    tagline: 'Academic Rigor & Security',
    features: ['Plutus & Haskell engineering', 'Functional design verification', 'UTXO architecture security', 'Sustainable tokenomics design'],
    svg: (color) => (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
        <circle cx="12" cy="12" r="2" fill={color} />
        <circle cx="12" cy="4" r="1.2" fill={color} />
        <circle cx="12" cy="20" r="1.2" fill={color} />
        <circle cx="4" cy="12" r="1.2" fill={color} />
        <circle cx="20" cy="12" r="1.2" fill={color} />
        <circle cx="6.3" cy="6.3" r="1" fill={color} />
        <circle cx="17.7" cy="17.7" r="1" fill={color} />
        <circle cx="6.3" cy="17.7" r="1" fill={color} />
        <circle cx="17.7" cy="6.3" r="1" fill={color} />
        <circle cx="12" cy="8" r="0.8" fill={color} />
        <circle cx="12" cy="16" r="0.8" fill={color} />
        <circle cx="8" cy="12" r="0.8" fill={color} />
        <circle cx="16" cy="12" r="0.8" fill={color} />
      </svg>
    )
  },
  polkadot: {
    color: '#E6007A',
    bgGradient: 'linear-gradient(135deg, rgba(230, 0, 122, 0.08) 0%, rgba(230, 0, 122, 0.01) 100%)',
    shadow: '0 20px 40px rgba(230, 0, 122, 0.12)',
    tagline: 'Interoperable Multichain',
    features: ['Substrate framework engineering', 'Parachain custom development', 'Cross-chain Messaging (XCM)', 'Shared validator security integration'],
    svg: (color) => (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke={color} strokeWidth="1.5">
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="5" cy="5" r="2" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <line x1="7.5" y1="7.5" x2="9.5" y2="9.5" />
        <line x1="16.5" y1="7.5" x2="14.5" y2="9.5" />
        <line x1="7.5" y1="16.5" x2="9.5" y2="14.5" />
        <line x1="16.5" y1="16.5" x2="14.5" y2="14.5" />
      </svg>
    )
  },
  sui: {
    color: '#34A2E6',
    bgGradient: 'linear-gradient(135deg, rgba(52, 162, 230, 0.08) 0%, rgba(52, 162, 230, 0.01) 100%)',
    shadow: '0 20px 40px rgba(52, 162, 230, 0.12)',
    tagline: 'Object-Centric Move Language',
    features: ['Sui Move contract deployment', 'Parallelized execution engine', 'Object-based asset modeling', 'Dynamic NFT & gaming integration'],
    svg: (color) => (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke={color} strokeWidth="1.5">
        <path d="M12 2c0 0-8 7-8 12 0 4.4 3.6 8 8 8s8-3.6 8-8c0-5-8-12-8-12z" />
        <path d="M8 12.5c0 0 2-2 4-2s4 2 4 2" />
        <path d="M6 15.5c0 0 3-2.5 6-2.5s6 2.5 6 2.5" />
      </svg>
    )
  }
};

// Helper function to turn hex code to RGBA for inline styling
function hexToRgba(hex, alpha) {
  // If shorthand hex like #FF0000
  let cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(char => char + char).join('');
  }
  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const getMetadata = (name) => {
  const norm = name.toLowerCase();
  
  // 1. Layer 1 & 2 Chains
  if (norm.includes('ethereum')) return CHAIN_METADATA.ethereum;
  if (norm.includes('solana')) return CHAIN_METADATA.solana;
  if (norm.includes('bsc') || norm.includes('binance')) return CHAIN_METADATA.bsc;
  if (norm.includes('cardano')) return CHAIN_METADATA.cardano;
  if (norm.includes('polkadot')) return CHAIN_METADATA.polkadot;
  if (norm.includes('sui')) return CHAIN_METADATA.sui;

  // 2. EXCHANGES
  if (norm.includes('exchange')) {
    let color = '#00BBF9'; // default blue
    let tagline = 'Exchange Infrastructure';
    let features = ['High-performance matching', 'Liquidity integration', 'Hot/cold wallet custody', 'Dynamic transaction fee controls'];
    
    if (norm.includes('custom')) {
      color = '#FF5733'; // Coral
      tagline = 'Bespoke Trading Infrastructure';
      features = ['Tailored order routing', 'Proprietary matching mechanics', 'Custom fee schedule engines', 'Unique asset listing modules'];
    } else if (norm.includes('white label')) {
      color = '#C1FF14'; // Lime
      tagline = 'Rapid Time-to-Market Core';
      features = ['Pre-integrated custody rails', 'Configurable portal themes', 'Standard matching engine', 'Default orderbook interfaces'];
    } else if (norm.includes('derivatives')) {
      color = '#9B5DE5'; // Purple
      tagline = 'Futures, Options & Swaps';
      features = ['Perpetual/expiry contract rules', 'Integrated options pricer', 'Real-time collateral calculation', 'Automated liquidation triggers'];
    } else if (norm.includes('decentralized') || norm.includes('dex')) {
      color = '#00F5D4'; // Teal
      tagline = 'Non-Custodial Liquidity Pools';
      features = ['Automated Market Maker (AMM)', 'Liquidity provider fee reward', 'Custom slip tolerance presets', 'Direct wallet swap interfaces'];
    } else if (norm.includes('centralized') || norm.includes('cex')) {
      color = '#00BBF9'; // Blue
      tagline = 'Institutional Execution Speed';
      features = ['High-throughput matching', 'Layered hot/cold wallet security', 'Pre-connected liquidity networks', 'Integrated fiat ramps'];
    } else if (norm.includes('p2p')) {
      color = '#F15BB5'; // Pink
      tagline = 'Secure Over-The-Counter Escrow';
      features = ['Smart-contract escrow holds', 'In-app secure chat rooms', 'Dispute mediation consoles', 'Multi-currency payment forms'];
    } else if (norm.includes('margin')) {
      color = '#FFB703'; // Yellow
      tagline = 'Leveraged Account Systems';
      features = ['Dynamic borrow rates calculation', 'Collateral threshold alerts', 'Cross-margin risk matching', 'Multi-asset loan accounts'];
    } else if (norm.includes('hybrid')) {
      color = '#FB5607'; // Orange
      tagline = 'Speed Meets Custodial Trust';
      features = ['Off-chain matching execution', 'On-chain atomic settlements', 'Encrypted trading sessions', 'Decentralized order verification'];
    } else if (norm.includes('perpetual')) {
      color = '#3A0CA3'; // Violet
      tagline = 'Infinite Expiry Trading';
      features = ['Funding rate balancing loops', 'Mark-to-market index feeds', 'Flexible cross-collateral options', 'High leverage risk parameters'];
    }
    
    return {
      color,
      bgGradient: `linear-gradient(135deg, ${hexToRgba(color, 0.08)} 0%, ${hexToRgba(color, 0.01)} 100%)`,
      shadow: `0 20px 40px ${hexToRgba(color, 0.12)}`,
      tagline,
      features,
      svg: (c) => (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke={c} strokeWidth="1.5">
          <path d="M3 3v18h18" />
          <path d="M18.5 7l-5.5 5.5-3.5-3.5L4 14.5" />
          <circle cx="18.5" cy="7" r="1.5" fill={c} />
        </svg>
      )
    };
  }

  // 3. WALLETS
  if (norm.includes('wallet') || norm.includes('super app')) {
    let color = '#4EA8DE'; // default blue
    let tagline = 'Asset Management Wallet';
    let features = ['Secure key generation', 'Multi-asset transaction feeds', 'Encrypted storage mechanisms', 'Push notification alerts'];

    if (norm.includes('digital')) {
      color = '#4EA8DE';
      tagline = 'Consumer Asset Portal';
      features = ['BIP-39 mnemonic setup', 'Quick QR-code transfers', 'EVM/Non-EVM assets feed', 'Local encrypted storage'];
    } else if (norm.includes('white label')) {
      color = '#560BAD';
      tagline = 'Configurable Wallet Engine';
      features = ['Custom color theme setup', 'Standard API connector hooks', 'Pre-connected node cluster', 'Ready-to-publish client builds'];
    } else if (norm.includes('super app')) {
      color = '#7209B7';
      tagline = 'Consolidated Web3 Ecosystem';
      features = ['In-app dApp browser sandbox', 'Built-in chat communications', 'Integrated payment routes', 'Multi-tenant feature panels'];
    } else if (norm.includes('defi')) {
      color = '#4CC9F0';
      tagline = 'Non-Custodial Yield Interface';
      features = ['Direct yield pool connectors', 'Automated token swap routing', 'Custom gas fee adjustment', 'DEX aggregation tools'];
    } else if (norm.includes('web3')) {
      color = '#F72585';
      tagline = 'Decentralized App Connector';
      features = ['Browser extension options', 'EIP-1193 provider standards', 'Multi-network session sync', 'Secure transaction simulation'];
    } else if (norm.includes('multicurrency')) {
      color = '#3F37C9';
      tagline = 'Cross-Chain Asset Hub';
      features = ['HD address derivation rules', 'Unified chain balance dashboard', 'Automatic token indexers', 'Custom network configuration'];
    } else if (norm.includes('tron')) {
      color = '#FF0000';
      tagline = 'Optimized TRON Ecosystem';
      features = ['TRX resource staking controls', 'TRC-10 & TRC-20 transfers', 'Energy & Bandwidth tracking', 'SunSwap integrations'];
    } else if (norm.includes('mpc')) {
      color = '#FF8A00';
      tagline = 'Multi-Party Custody Trust';
      features = ['Key share split generation', 'Social network key recovery', 'Threshold signature checks', 'Enterprise custody controls'];
    } else if (norm.includes('ai')) {
      color = '#14F195';
      tagline = 'Intelligent Portfolio Management';
      features = ['Automated rebalance indicators', 'Gas cost forecasts', 'Natural language command checks', 'AI transaction simulations'];
    }

    return {
      color,
      bgGradient: `linear-gradient(135deg, ${hexToRgba(color, 0.08)} 0%, ${hexToRgba(color, 0.01)} 100%)`,
      shadow: `0 20px 40px ${hexToRgba(color, 0.12)}`,
      tagline,
      features,
      svg: (c) => (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke={c} strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <path d="M16 12h5v4h-5z" />
          <circle cx="12" cy="12" r="1.5" fill={c} />
        </svg>
      )
    };
  }

  // 4. TOKENIZATION & TREASURIES / ASSET MANAGEMENT
  if (norm.includes('tokenization') || norm.includes('standards') || norm.includes('management') || norm.includes('treasuries')) {
    let color = '#8338EC'; // default purple
    let tagline = 'Asset Tokenization';
    let features = ['Asset smart contract issuance', 'Regulatory transfer controls', 'On-chain ownership ledger', 'Dynamic metadata records'];

    if (norm.includes('real estate')) {
      color = '#3A5A40';
      tagline = 'Fractional Property Portals';
      features = ['Property deed mapping records', 'Rental yield distributions', 'Secondary market trading hooks', 'Investor whitelist controls'];
    } else if (norm.includes('standards')) {
      color = '#2EC4B6';
      tagline = 'Compliant Security Protocols';
      features = ['ERC-3643 rule sets integration', 'ERC-1400 partitioned tokens', 'Investor identity controls', 'Freeze & clawback hooks'];
    } else if (norm.includes('white label')) {
      color = '#FF9F1C';
      tagline = 'Instant Issuance Dashboards';
      features = ['Admin mint/burn controls', 'Investor whitelist consoles', 'Metadata generator setups', 'Compliance check settings'];
    } else if (norm.includes('fund')) {
      color = '#E71D36';
      tagline = 'Digital Fund Shares';
      features = ['Dividend reinvestment engines', 'Automated NAV price updates', 'Redemption payout automation', 'Compliance validation rules'];
    } else if (norm.includes('gold')) {
      color = '#FFD700';
      tagline = 'Gold-Backed Secure Ledgers';
      features = ['Vault inventory audits lookup', 'Ounce-to-token weight checks', 'Redeemable bullion procedures', 'Low-fee transfer options'];
    } else if (norm.includes('asset management')) {
      color = '#4361EE';
      tagline = 'On-Chain Pool Optimization';
      features = ['Fee auto-distribution setups', 'Yield aggregation routing', 'Automated asset rebalancing', 'Real-time allocation reports'];
    } else if (norm.includes('treasuries')) {
      color = '#006400';
      tagline = 'On-Chain T-Bills Yield';
      features = ['Oracle interest rate tracking', 'Whitelisted transfer rules', 'KYC/AML compliance locks', 'Liquidity pools integrations'];
    } else if (norm.includes('asset tokenization') || norm.includes('asset')) {
      color = '#8338EC';
      tagline = 'Physical to Digital Twins';
      features = ['Dynamic supply configuration', 'Token metadata registry rules', 'On-chain fractional divisions', 'Audit-ready asset tracking'];
    }

    return {
      color,
      bgGradient: `linear-gradient(135deg, ${hexToRgba(color, 0.08)} 0%, ${hexToRgba(color, 0.01)} 100%)`,
      shadow: `0 20px 40px ${hexToRgba(color, 0.12)}`,
      tagline,
      features,
      svg: (c) => (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke={c} strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10" />
          <path d="M7 12h10" />
          <path d="M12 7l5 5-5 5-5-5 5-5z" />
        </svg>
      )
    };
  }

  // Fallback
  return {
    color: '#8E8E93',
    bgGradient: 'linear-gradient(135deg, rgba(142, 142, 147, 0.06) 0%, rgba(142, 142, 147, 0.01) 100%)',
    shadow: '0 20px 40px rgba(142, 142, 147, 0.1)',
    tagline: 'Blockchain Engineering',
    features: ['Custom dApp development', 'Smart contract deployment', 'Security and optimization reviews'],
    svg: (color) => (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke={color} strokeWidth="1.5">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    )
  };
};

export default function PublicChains({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data || !data.chains || data.chains.length === 0) return null;

  const headline = data.headline || "Layer 1 & Layer 2 Solutions";
  const subhead = data.subhead || "Development across leading public chains for secure, scalable dApps.";

  return (
    <section className="service-section public-chains-section light-bg">
      <div className="section-container">
        <span className="tagline">Ecosystem Interoperability</span>
        <h2 className="section-head">{headline}</h2>
        <p className="section-desc">{subhead}</p>

        <div className="chains-deck">
          {data.chains.map((chain, index) => {
            const meta = getMetadata(chain.name);
            const isActive = activeIndex === index;

            // Extract main title token to prevent vertical overflow in collapsed state
            const collapsedLabel = chain.name
              .replace(" Blockchain Development", "")
              .replace(" (BNB Smart Chain)", "")
              .replace(" Development", "");

            return (
              <div
                key={index}
                className={`chain-card ${isActive ? "active" : ""}`}
                style={{
                  "--accent-color": meta.color,
                  "--bg-gradient": meta.bgGradient,
                  "--card-shadow": meta.shadow
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                {/* Background grid texture overlay */}
                <div className="card-grid-overlay" />
                <div className="accent-bar-top" />

                <div className="card-collapsed-header">
                  <div className="chain-icon-circle">
                    {meta.svg(isActive ? meta.color : "#636366")}
                  </div>
                  <h3 className="chain-vertical-title">{collapsedLabel}</h3>
                </div>

                <div className="card-expanded-content">
                  <div className="content-header">
                    <span className="chain-tagline">{meta.tagline}</span>
                    <h3 className="chain-title">{chain.name}</h3>
                  </div>

                  <p className="chain-description">{chain.desc}</p>

                  <div className="chain-capabilities-wrapper">
                    <h4>Development Scope</h4>
                    <ul className="chain-capabilities-bullets">
                      {meta.features.map((feature, fIdx) => (
                        <li key={fIdx}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17L4 12" stroke={meta.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
