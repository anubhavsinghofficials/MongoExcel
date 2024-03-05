export const checkExcelExtension = (selectedFile: File) => {
  const ext = selectedFile.name.split(".").pop()?.toLowerCase()
  const validType1 = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  const validType2 = "application/vnd.ms-excel"
  const extensionCheck = ext === "xlsx" || ext === "xls"
  const typeCheck = selectedFile.type === validType1 || selectedFile.type === validType2
  return extensionCheck || typeCheck
}
