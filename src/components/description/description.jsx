import c from './discription.module.scss';

const Description = ({info}) => {

  return (
    info.map(el => {
      return (
        <dl key={el.title} className={c.description}>
          <div className="d-flex">
            <dt style={{marginRight: '10px'}}>{el.title}</dt>
            <dd>{el.info}</dd>
          </div>

        </dl>
      )
    })
  )

}

export default Description;