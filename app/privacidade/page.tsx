import { LegalPage } from "@/components/legal-page"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Política de Privacidade",
  description: "Política de Privacidade da AstraX. Conteúdo legal a definir antes do lançamento.",
  path: "/privacidade",
  noindex: true,
})

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      intro="Como a AstraX trata os dados pessoais dos participantes e visitantes."
      sections={[
        "Responsável pelo tratamento",
        "Dados recolhidos",
        "Finalidades e fundamento legal",
        "Conservação dos dados",
        "Direitos dos titulares",
        "Contacto para questões de privacidade",
      ]}
    />
  )
}
