import { FormEventHandler } from 'react';
import styles from './style.module.css';

interface PlanetFormProps {
  onSubmit: FormEventHandler<HTMLFormElement>
}

export function PlanetForm({ onSubmit }: PlanetFormProps) {
  return (
    <form className={styles.planetForm} onSubmit={onSubmit}>
      <div>
        <label htmlFor='name'>Nome</label>
        <input type='text' name='name' id='name' required />
      </div>

      <div>
        <label htmlFor='description'>Descrição</label>
        <textarea name='description' id='description' required></textarea>
      </div>

      <div>
        <label htmlFor='imageUrl'>Imagem (URL)</label>
        <input type='text' name='imageUrl' id='imageUrl' required />
      </div>

      <div>
        <button type='submit'>Adicionar Planeta</button>
      </div>
    </form>
  )
}