export interface Project {
  id: string;
  teamname: string;
  nameabbr: string;
  nameexp: string;
  projectid: string;
  code: string;
  offrepname: string;
  onrepname: string;
  codesmellgatepass: string;
  bugsgatepass: string;
  coveragegatepass: string;
  token: string;
  onboarddate: string;
  deleteddate: string;
  engineeringBatch : number
  bugsBatch : number
  coverageBatch : number
  devilBatch : number
  rating : number
}
