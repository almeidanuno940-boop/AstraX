import type { Metadata } from "next"
import { ButtonLink } from "@/components/button-link"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false },
}

export default function NotFound() {
  return (
    <PageHero
      eyebrow="Erro 404"
      lines={["Página não", "encontrada."]}
      description="A página que procuras não existe ou foi movida."
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/" variant="primary">
          Página inicial
        </ButtonLink>
        <ButtonLink href="/challenges" variant="outline">
          Ver desafios
        </ButtonLink>
      </div>
    </PageHero>
  )
}
