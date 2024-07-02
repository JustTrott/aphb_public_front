/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/rhMxazcCdYQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Manrope } from 'next/font/google'
import { Chivo } from 'next/font/google'

manrope({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function Leaderboard({ standings }: { standings: any }) {
	return (
		<div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center p-4">
			<div className="bg-card rounded-lg shadow-lg w-full p-6">
				<h1 className="text-3xl font-bold mb-6 text-center">
					Team Standings
				</h1>
				<div className="overflow-x-auto">
					<table className="w-full text-left">
						<thead>
							<tr className="border-b border-muted">
								<th className="py-3 px-4 font-medium">Team</th>
								<th className="py-3 px-4 font-medium">
									Initial Points
								</th>
								<th className="py-3 px-4 font-medium">
									Tour 1
								</th>
								<th className="py-3 px-4 font-medium">
									Tour 1 CB
								</th>
								<th className="py-3 px-4 font-medium">
									Tour 2
								</th>
								<th className="py-3 px-4 font-medium">
									Tour 2 CB
								</th>
								<th className="py-3 px-4 font-medium">
									Tour 3
								</th>
								<th className="py-3 px-4 font-medium">
									Tour 3 CB
								</th>
								<th className="py-3 px-4 font-medium">
									Tour 4
								</th>
								<th className="py-3 px-4 font-medium">
									Tour 4 CB
								</th>
								<th className="py-3 px-4 font-medium">
									Tour 5
								</th>
								<th className="py-3 px-4 font-medium">
									Tour 5 CB
								</th>
								<th className="py-3 px-4 font-medium">
									Tour 6
								</th>
								<th className="py-3 px-4 font-medium">
									Tour 6 CB
								</th>
								<th className="py-3 px-4 font-medium">
									Tour 7
								</th>
								<th className="py-3 px-4 font-medium">
									Tour 7 CB
								</th>
							</tr>
						</thead>
						<tbody>
							{standings.map((standing: any) => (
								<tr
									key={standing.id}
									className="border-b border-muted"
								>
									<td className="py-3 px-4">
										{standing.name}
									</td>
									<td className="py-3 px-4">
										{standing.qualPoints}
									</td>
									<td className="py-3 px-4">
										{standing.tours.length > 0
											? standing.tours[0].points
											: "-"}
									</td>
									<td className="py-3 px-4">
										{standing.tours.length > 0
											? standing.tours[0].CB
											: "-"}
									</td>
									<td className="py-3 px-4">
										{standing.tours.length > 1
											? standing.tours[1].points
											: "-"}
									</td>
									<td className="py-3 px-4">
										{standing.tours.length > 1
											? standing.tours[1].CB
											: "-"}
									</td>
									<td className="py-3 px-4">
										{standing.tours.length > 2
											? standing.tours[2].points
											: "-"}
									</td>
									<td className="py-3 px-4">
										{standing.tours.length > 2
											? standing.tours[2].CB
											: "-"}
									</td>
									<td className="py-3 px-4">
										{standing.tours.length > 3
											? standing.tours[3].points
											: "-"}
									</td>
									<td className="py-3 px-4">
										{standing.tours.length > 3
											? standing.tours[3].CB
											: "-"}
									</td>
									<td className="py-3 px-4">
										{standing.tours.length > 4
											? standing.tours[4].points
											: "-"}
									</td>
									<td className="py-3 px-4">
										{standing.tours.length > 4
											? standing.tours[4].CB
											: "-"}
									</td>
									<td className="py-3 px-4">
										{standing.tours.length > 5
											? standing.tours[5].points
											: "-"}
									</td>
									<td className="py-3 px-4">
										{standing.tours.length > 5
											? standing.tours[5].CB
											: "-"}
									</td>
									<td className="py-3 px-4">
										{standing.tours.length > 6
											? standing.tours[6].points
											: "-"}
									</td>
									<td className="py-3 px-4">
										{standing.tours.length > 6
											? standing.tours[6].CB
											: "-"}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}