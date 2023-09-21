export interface AudienceGraphRow {
  xValue: number
  yValue: number
}

export interface AudienceGraphStore {
  isOpen: boolean
  audienceGraphData: AudienceGraphRow[]
}
