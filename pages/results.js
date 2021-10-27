import Title from '../components/Title'
import Container from '../components/Container'
import Section from '../components/Section'
import ResultSection from '../components/ResultSection'
import DisplayValue from '../components/DisplayValue'
import DisplayAge from '../components/DisplayAge'
import Button from '../components/Button'
import PercentilPlot from '../components/PercentilPlot'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Results = ({ results }) => {
  const router = useRouter()
  const {
    age_equivalences,
    percentiles,
    performances,
    scaled_scores,
    standard_scores
  } = results

  const {
    years,
    months,
    natural_vmi,
    natural_visual,
    natural_motor
  } = router.query

  return (
    <Container>
      <Section>
        <Title>Datos ingresados</Title>
        <ResultSection label='Edad'>
          <DisplayValue value={years} label='Años' />
          <DisplayValue value={months} label='Meses' />
        </ResultSection>
        <ResultSection label='Puntaje natural'>
          <DisplayValue value={natural_vmi} label='VMI' />
          <DisplayValue value={natural_visual} label='Visual' />
          <DisplayValue value={natural_motor} label='Motriz' />
        </ResultSection>
        <Title>Resultados</Title>
        <ResultSection label='Puntajes estándar'>
          <DisplayValue value={standard_scores.vmi} label='VMI' />
          <DisplayValue value={standard_scores.visual} label='Visual' />
          <DisplayValue value={standard_scores.motor} label='Motriz' />
        </ResultSection>
        <ResultSection label='Puntajes escalados'>
          <DisplayValue value={scaled_scores.vmi} label='VMI' />
          <DisplayValue value={scaled_scores.visual} label='Visual' />
          <DisplayValue value={scaled_scores.motor} label='Motriz' />
        </ResultSection>
        <ResultSection label='Desempeño promedio'>
          <DisplayValue value={performances.vmi} label='VMI' />
          <DisplayValue value={performances.visual} label='Visual' />
          <DisplayValue value={performances.motor} label='Motriz' />
        </ResultSection>
        <ResultSection label='Edad'>
          <DisplayAge value={age_equivalences.vmi} label='VMI' />
          <DisplayAge value={age_equivalences.visual} label='Visual' />
          <DisplayAge value={age_equivalences.motor} label='Motriz' />
        </ResultSection>
        <ResultSection label='Percentiles'>
          <DisplayValue value={percentiles.vmi} label='VMI' />
          <DisplayValue value={percentiles.visual} label='Visual' />
          <DisplayValue value={percentiles.motor} label='Motriz' />
        </ResultSection>
        <PercentilPlot values={standard_scores} />
        <Link href='/'>
          <Button>Volver al inicio</Button>
        </Link>
      </Section>
    </Container>
  )
}

export default Results

export const getServerSideProps = async props => {
  const values = props.query
  const response = await fetch(
    `https://vmi-api.herokuapp.com/vmi?
        age_years=${values.years}
        &age_months=${values.months}
        &vmi_natural_scores=${values.natural_vmi}
        &visual_natural_scores=${values.natural_visual}
        &motor_natural_scores=${values.natural_motor}`
  )
  const results = await response.json()

  return {
    props: { results: results.data }
  }
}
