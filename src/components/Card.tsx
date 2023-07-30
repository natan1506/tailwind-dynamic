interface CardProps {
	color?: string
	handleNewColors?: () => void
}

export function Card({ handleNewColors }: CardProps) {
	return (
		<div className=" h-1/4 w-2/4 bg-gradient-to-bl shadow-lg shadow-slate-800 p-1 rounded-xl from-primary via-primary2 via-secondary to-secondary2">
			<div className="h-full w-full rounded-xl bg-slate-900 text-zinc-100">
				<div className="border-b border-zinc-50/20 p-4 flex justify-between items-center">
					<h1>Study of variables in tailwindcss</h1>
					<button
						onClick={handleNewColors}
						className="group border rounded-lg px-1.5 py-2 
						bg-primary hover:bg-secondary transition-colors ">
						<span className="text-primary  group-hover:text-secondary invert backdrop-invert">
							generate Colors
						</span>
					</button>
				</div>
				<div className="p-4">
					<h1>body</h1>
				</div>
			</div>
		</div>
	)
}

export default Card
