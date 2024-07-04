/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/x1cdMm7ZGU5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ActiveHistory({
	battles,
	loading,
	league,
}: {
	battles: any[];
	loading: boolean;
	league: string;
}) {
	const filteredBattles = battles.filter(
		(battle) => battle.teams[0].league === league
	);
	// console.log(battles[0].teams);
	if (loading) {
		return <div>Loading...</div>;
	}
	// get battles that have highest .tour value
	const highestTour = Math.max(...battles.map((battle) => battle.tour)) || 0;
	const activeBattles = filteredBattles.filter(
		(battle) => battle.tour === highestTour
	);
	return (
		<div className="bg-background rounded-lg border p-6 flex flex-col gap-6">
			<div className="flex flex-col gap-4">
				<h2 className="text-lg font-bold">Active Battles</h2>
				<div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6">
					{activeBattles.length === 0 || highestTour === 8 ? (
						<div className="text-card-foreground">
							No active battles
						</div>
					) : (
						activeBattles.map((battle) => (
							<div
								className="bg-card rounded-lg p-4 flex flex-col gap-2"
								key={battle._id}
							>
								<div className="flex items-center justify-between gap-1">
									<span className="text-card-foreground font-medium">
										{battle.teams[0].name}
									</span>
									<div className="flex items-center gap-2">
										<span className="text-card-foreground">
											{battle.points[0]}
										</span>
									</div>
								</div>
								{battle.teams[1] && (
									<div className="flex items-center justify-between gap-1">
										<span className="text-card-foreground font-medium">
											{battle.teams[1].name}
										</span>
										<div className="flex items-center gap-2">
											<span className="text-card-foreground">
												{battle.points[1]}
											</span>
										</div>
									</div>
								)}
								{!battle.teams[1] && (
									<div className="flex items-center justify-between gap-1">
										<span className="text-card-foreground font-medium">
											Jury
										</span>
										<div className="flex items-center gap-2">
											<span className="text-card-foreground">
												-
											</span>
										</div>
									</div>
								)}
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
}
