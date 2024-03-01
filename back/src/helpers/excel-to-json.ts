import xlsx from "xlsx"

export type TCandidate = { [key: string]: string }

export const excelToJson = (filePath: string) => {
  const workbook = xlsx.readFile(filePath)
  const sheetName = workbook.SheetNames[0]
  const sheet = workbook.Sheets[sheetName]
  const data: TCandidate[] = xlsx.utils.sheet_to_json(sheet)
  return data
}
