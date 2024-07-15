import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer"
import MemorandumPDF from "./MemorandumPDF"

const VerPdf = () => {

    return(
        <>
            <PDFViewer style={{width:"100%", height:"100vh"}}>
                <MemorandumPDF/>
            </PDFViewer>
            <PDFDownloadLink>
                <MemorandumPDF/>
            </PDFDownloadLink>
        </>
    )

}
export default VerPdf