import Link from 'next/link'
import Image from 'next/image'
import * as S from './styles'

export function HomeTemplate() {
  return (
    <S.Container>
      <S.Content>
        <div className="image-wrapper">
          <Image src="/img/logo-full.svg" alt="Logo" width={500} height={500} />
        </div>

        <div className="text">
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </div>
      </S.Content>

      <S.Wrapper>
        <S.Location>
          <strong>Fortaleza</strong>
          <span>Ceará</span>
        </S.Location>

        <Link href="/orphanage">
          <a className="arrow">
            <S.ArrowIcon />
          </a>
        </Link>
      </S.Wrapper>
    </S.Container>
  )
}
