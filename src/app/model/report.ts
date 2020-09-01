export interface Report {
  teamName: string,
  projectName : string,
  linesOfCode : number,
  currentBugs : number,
  currentCodeSmell : number,
  currentCoverage : number,
  previousBugs : number,
  previousCodeSmell : number,
  previousCoverage : number,
  bugsDifference : number,
  codesmellDifference : number,
  coverageDifference : number,
  engineerBatch : boolean,
  bugsBatch : boolean
  coverageBatch : boolean
  devilBatch : boolean
}
