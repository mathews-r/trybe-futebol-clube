export interface ITeamLeaderBoard {
  name: string;
  totalPoints: number;
  totalGames: number,
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: string;
}

export interface ITeam {
  id: number;
  teamName: string;
}
