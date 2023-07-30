import { useEffect } from 'react'
import Card from './components/card'
import { generateRandomColor } from './utils/useGenerateColors'

function App() {
	useEffect(() => {
		handleNewColors()
	}, [])
	// useEffect(() => {
	// 	const intervalId = setInterval(() => {
	// 		const newColor = generateRandomColor()
	// 		// console.log(newColor)
	// 		// const oldColor = color
	// 		document.documentElement.style.setProperty('--color-primary', newColor)
	// 	}, 2000)

	// 	return () => clearInterval(intervalId)
	// }, [])

	const handleNewColors = () => {
		const color1 = generateRandomColor()
		const color2 = generateRandomColor()
		const color3 = generateRandomColor()
		const color4 = generateRandomColor()
		document.documentElement.style.setProperty('--color-primary', color1)
		document.documentElement.style.setProperty('--color-primary2', color2)
		document.documentElement.style.setProperty('--color-secondary', color3)
		document.documentElement.style.setProperty('--color-secondary2', color4)
	}
	return (
		<div className="w-screen h-screen flex justify-center items-center bg-gradient-to-tr from-primary via-primary2 via-secondary to-secondary2 transition-all background-animate">
			<Card handleNewColors={handleNewColors} />
		</div>
	)
}

export default App
