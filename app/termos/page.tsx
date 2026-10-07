import { LegalPage } from "@/components/legal-page"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Termos e Condições",
  description: "Termos e Condições de participação nos desafios AstraX. Conteúdo legal a definir antes do lançamento.",
  path: "/termos",
  noindex: true,
})

export default function TermsPage() {
  return (
    <LegalPage
      title="Termos e Condições"
      intro="As condições de inscrição e participação nos desafios da AstraX."
      sections={[
        "Inscrição e participação",
        "Preços, pagamentos e reembolsos",
        "Regulamento de cada desafio",
        "Segurança e responsabilidade",
        "Utilização de imagem",
        "Alterações e cancelamentos",
      ]}
    />
  )
}
