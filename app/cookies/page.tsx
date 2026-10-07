import { LegalPage } from "@/components/legal-page"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Política de Cookies",
  description: "Política de Cookies do site AstraX. Conteúdo legal a definir antes do lançamento.",
  path: "/cookies",
  noindex: true,
})

export default function CookiesPage() {
  return (
    <LegalPage
      title="Política de Cookies"
      intro="Que cookies e tecnologias semelhantes são utilizados neste site."
      sections={["O que são cookies", "Cookies utilizados", "Como gerir os cookies", "Contacto"]}
    />
  )
}
