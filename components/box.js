import styles from '../styles/Home.module.css'
import Image from 'next/image';

export default function Box ({ boxes }) {
  return (
    <>
      <h1>hello cats</h1>        
          
        {boxes.map(item => (

          <div className={styles.card} key={item.fields.heading}>
            <div>
              <Image
                src={`https:${item.fields.picture.fields.file.url}`}
                alt={item.fields.picture.fields.description}
                width={ item.fields.picture.fields.file.details.image.width}
                height={ item.fields.picture.fields.file.details.image.height}
                layout="responsive"
              />
            </div>                
            <h2>{item.fields.heading}</h2>
            <p>{item.fields.blurb}</p>
          </div>
      ))}
    </>
  )
}