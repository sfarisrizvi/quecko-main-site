import RootLayout from "./RootLayout";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function BlogLayout({ children, breadcrumbs = [] }) {
  const schemaItems = breadcrumbs.map((b) => ({
    name: b.label,
    url: b.href ? `https://quecko.com${b.href}` : undefined,
  }));

  return (
    <RootLayout>
      <BreadcrumbSchema items={schemaItems} />
      {children}
    </RootLayout>
  );
}
