import { PDFDownloadLink } from "@react-pdf/renderer";
import MemorandumPDF from "./MemorandumPDF";



const DescargarMemorando = () => (
    <div>
      <PDFDownloadLink document={<MemorandumPDF />} fileName="example.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
  
  );
  
  export default DescargarMemorando