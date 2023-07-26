function Card() {
	return (
		<div className=" h-1/4 w-2/4 bg-gradient-to-bl shadow-lg shadow-slate-800 p-1 rounded-xl from-fuchsia-500 to-cyan-500">
			<div className="h-full w-full rounded-xl bg-slate-900 text-zinc-100">
				<div className="border-b border-zinc-50/20 p-4">
					<h1>header</h1>
				</div>
				<div className="p-4">
					<h1>body</h1>
				</div>
			</div>
		</div>
	)
}

export default Card
