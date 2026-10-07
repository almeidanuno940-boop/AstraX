import { LegalPage } from "@/components/legal-page"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Política de Cookies",
  description: "Que cookies e tecnologias semelhantes o site AstraX utiliza e como as podes gerir.",
  path: "/cookies",
})

export default function CookiesPage() {
  return (
    <LegalPage
      title="Política de Cookies"
      intro="Que cookies e tecnologias semelhantes são utilizados neste site."
      sections={[
        {
          title: "O que são cookies",
          paragraphs: [
            "Cookies são pequenos ficheiros de texto que um site guarda no teu dispositivo quando o visitas. Servem, por exemplo, para manter sessões iniciadas, memorizar preferências ou medir a utilização do site.",
          ],
        },
        {
          title: "Cookies utilizados",
          paragraphs: [
            "O site AstraX não utiliza cookies de publicidade, de marketing nem de acompanhamento entre sites, e não cria contas de utilizador nem sessões.",
            "Para perceber quantas pessoas visitam o site e que páginas consultam, utilizamos o Vercel Web Analytics. Esta ferramenta mede visitas de forma agregada e anónima, sem recorrer a cookies nem guardar informação no teu dispositivo.",
            "Os dados que preenches nos formulários de contacto e de inscrição não são guardados em cookies. Neste momento, esses formulários apenas validam a informação no teu navegador.",
          ],
        },
        {
          title: "Como gerir os cookies",
          paragraphs: [
            "Como o site não define cookies que exijam o teu consentimento, não existe um painel de preferências. Podes, ainda assim, bloquear ou apagar cookies a qualquer momento nas definições do teu navegador.",
            "Se no futuro passarmos a utilizar outros cookies ou serviços de terceiros, esta política será atualizada e pediremos o teu consentimento sempre que a lei o exigir.",
          ],
        },
        {
          title: "Contacto",
          paragraphs: ["Para qualquer questão sobre cookies ou privacidade, usa a nossa página de contacto."],
        },
      ]}
    />
  )
}
