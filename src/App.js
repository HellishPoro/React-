import { useState } from 'react';
import './index.css';
import styles from './app.module.css'






function App() {
	let [value = '', setValue] = useState()
	let [list = [], setList] = useState()
	let [error = '', setError] = useState()
	const onInputButtonClick = () => {
		let promptValue = prompt('Введите значение')
		if (promptValue === null) {
			return false
		}
		if (promptValue.length <= 2) {
			setError(error = 'Введенное значение должно содержать минимум 3 символа ')
		} else {
			value = promptValue
			error = ''
		}
		if (error !== '') {
			promptValue = value
		}

		setValue(value = promptValue)
	}
	const isValueVaild = () => {
		if (value.length <= 2) {
			return false
		} else {
			return true
		}
	}


	const onAddButtonClick = () => {
		if (value.length < 2) {
			list.push(value)
		}
		let id = Date.now()
		const updatedList = [...list, { id, value }]
		setList(updatedList)
		setError('')
		setValue('')
	}


	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>: "<output className={styles.currentValue}>{value}</output>"
			</p>
			<div className={styles.error}>{error}</div>
			<div className={styles.buttonsContainer}>
				<button className={styles.button} onClick={onInputButtonClick}>Ввести новое</button>
				<button className={styles.button} onClick={onAddButtonClick} disabled={!isValueVaild()} >Добавить в список</button>
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>
				<p className={styles.noMarginText}>Нет добавленных элементов</p>
				<ul className={styles.list}>{list.map(({ id, value }) =>
					(<li className={styles.listItem} key={id}>{value}</li>))}
				</ul>
			</div>
		</div>
	);

}

export default App;
