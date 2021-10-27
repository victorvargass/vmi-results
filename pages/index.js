import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Input from '../components/Input'
import Button from '../components/Button'
import Container from '../components/Container'
import Section from '../components/Section.js'
import InputSection from '../components/InputSection'
import Title from '../components/Title'
import { useRouter } from 'next/router'

function Home () {
  const router = useRouter()
  const handleSubmit = async values => {
    router.push({
      pathname: '/results',
      query: values
    })
  }

  return (
    <Container>
      <Section>
        <Title>
          Prueba Beery – Buktenica del Desarrollo de la Integración Visomotriz
          (VMI)
        </Title>
        <Formik
          initialValues={{
            years: '',
            months: '',
            natural_vmi: '',
            natural_visual: '',
            natural_motor: ''
          }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            years: Yup.number()
              .required('Obligatorio')
              .typeError('Debe ser un número')
              .min(3, 'El valor mínimo es 3')
              .max(17, 'El valor máximo es 17'),
            months: Yup.number()
              .required('Obligatorio')
              .typeError('Debe ser un número')
              .min(0, 'El valor mínimo es 0')
              .max(11, 'El valor máximo es 11'),
            natural_vmi: Yup.number()
              .required('Obligatorio')
              .typeError('Debe ser un número')
              .min(1, 'El valor mínimo es 1')
              .max(27, 'El valor máximo es 27'),
            natural_visual: Yup.number()
              .required('Obligatorio')
              .typeError('Debe ser un número')
              .min(1, 'El valor mínimo es 1')
              .max(27, 'El valor máximo es 27'),
            natural_motor: Yup.number()
              .required('Obligatorio')
              .typeError('Debe ser un número')
              .min(1, 'El valor mínimo es 1')
              .max(27, 'El valor máximo es 27')
          })}
        >
          <Form>
            <InputSection label='Edad'>
              <Input name='years' label='Años' />
              <Input name='months' label='Meses' />
            </InputSection>
            <InputSection label='Puntaje natural'>
              <Input name='natural_vmi' label='VMI' />
              <Input name='natural_visual' label='Visual' />
              <Input name='natural_motor' label='Motriz' />
            </InputSection>
            <Button type='submit'>Obtener resultados</Button>
          </Form>
        </Formik>
      </Section>
    </Container>
  )
}

export default Home
