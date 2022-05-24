const Description = () => {
  const info = [
    { title: 'Date of Birth', info: '19.02.1956' },
    { title: 'City', info: 'Minsk' },
    { title: 'Education', info: 'SU 11' },
    { title: 'ebsite', info: 'www.www.ru' },
  ]

  return (
    info.map(el => {
      return (
        <dl key={el.title}>
          <dt>{el.title}</dt>
          <dd>{el.info}</dd>
        </dl>
      )
    })
  )

}

export default Description;