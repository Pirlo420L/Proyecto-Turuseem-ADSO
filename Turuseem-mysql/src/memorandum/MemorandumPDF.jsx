import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import LOGOSENAEMPRESA from "../assets/LOGOSENAEMPRESA.png"

const fechaActual = new Date(Date.now())
const dia = String(fechaActual.getDate()).padStart(2, '0')
const mes = String(fechaActual.getMonth() + 1).padStart(2, '0')
const año = fechaActual.getFullYear()



const styles = StyleSheet.create({
    page: {    
        flexDirection: 'col',
        backgroundColor: '#E4E4E4' 
    },
    section:{   
        marginHorizontal: "45px",
        marginTop: "25px",
        padding: "5px",
        border: '1px solid #black', 
        height: "100px", 
        flexDirection: "row",
        justifyContent: 'space-between', 
        marginBottom: "30px"
    }, 
    texto: {    
        fontSize: 12,
        fontFamily: "Times-Bold", 
        fontWeight: "bold"
    },
    textoPequeño: { 
        fontSize: 9,
    },
    mb: { 
        marginBottom: "35px"
    },
    tamamoImagen: {
        width: "105px",
        height: "115px"
    },
    alignment: {
        alignItems: "end"
    },
    section2: {
        justifyContent: "space-between",
        flexDirection: "row",
        fontSize: 12, 
        marginHorizontal: "45px", 
        marginBottom: "35px", 
    }, 
    mg: {
        marginHorizontal: "45px",
        marginVertical: "25px",
    },
    font: {
        fontFamily: "Times-Bold"
    },
    mgH: {
        marginHorizontal: "45px"
    }, 
    fontSM: {
        fontSize: "12px"
    }, 
    negrita: {
        fontFamily: "Helvetica-Bold", 
        fontSize: "12px", 
        fontWeight: 700
    },
    center: {
        textAlign: "center",
        fontSize: "12px",
        marginVertical: "20px"
    }, 
    texto1: {
        marginHorizontal: "60",
        fontSize: "13px",
        marginBottom: "20px"
    },
    texto2: {
        marginHorizontal: "60",
        fontSize: "13px",
        marginTop: "25px",
        marginBottom: "110px"
    }, 
    sectionFirma: {
        justifyContent: "space-around",
        flexDirection: "row",
        fontSize: 12, 
        marginHorizontal: "45px", 
        marginBottom: "35px", 
    },
    textoFooter: {
        marginHorizontal: "60",
        fontSize: "10px",
        marginBottom: "20px",
        alignItems: "flex-end",
        paddingTop: "30px",
    }

});

const MemorandumPDF = () => (
    <Document>
        <Page size="A4">
            <View style={styles.section}>
                <View>
                    <View style={styles.mb}>
                        <Text style={styles.texto}>FORMATO MEMORANDO SENAEMPRESA</Text>
                        <Text style={styles.texto}>PRUEBA PILOTO</Text>
                    </View>
                    <Text style={styles.textoPequeño}>Proceso: Gestion del Talento Humano</Text>
                    <Text style={styles.textoPequeño}>Procedimiento: Seleccion, Desarrollo y Evaluacion de Desempeño de Personal </Text>   
                </View>
                <View style={styles.alignment}>
                    <Image src={LOGOSENAEMPRESA}  style={styles.tamamoImagen}/>
                </View>
            </View>
            <View style={styles.section2}>
                <Text>Espinal - {`${dia}/${mes}/${año}`}</Text>
                <Text style={styles.font}>No. TII022302</Text>
            </View>
            <View style={styles.mgH}>
                <Text style={styles.fontSM}>Aprendiz</Text>
                <Text style={styles.negrita}>Juan David Linares Barragan</Text>
                <Text style={styles.negrita}>Tecnologo en Analisis y Desarrollo de Software</Text>
                <Text style={styles.fontSM}>Ficha No. 2671143</Text>
                <Text style={styles.fontSM}>Unidad Asignada: Oficina Sena Empresa</Text>
                <Text style={styles.fontSM}>Fecha: {`${dia}/${mes}/${año}`}</Text>
            </View>
            <View>
                <Text style={styles.center}>Asunto: Memorando</Text>
                <Text style={styles.texto1}>Me permito notificarle que por su inasistencia a turno rutinario se gemera el respectivo Memorando.</Text>
                <Text style={styles.texto1}>Igual lo invitamos a continuar con el cumplimiento de sus labores que contribuyen con el buen funcionamiento de la estrategia Sena Empresa. Recuerde que usted es parte fundamental de los procesos productivos de las unidades tanto en lo técnico como en lo administrativo.
                </Text>
                <Text style={styles.texto1}>Este es em memorando numero 2 del trimestre ll {`${año}`}</Text>
                <Text style={styles.texto1}>Nota: Este correctivo se realizará de acuerdo con la normatividad vigente del Sena se archiva en la hoja de vida del aprendiz y sirve como evidencia para el comité de evaluación. Tiene cuarenta y ocho horas (48) a partir del momento en que se le entrega el memorando para justificarlo en forma escrita o a través de correo.</Text>
                <Text style={styles.texto2}>Para constancia de lo anterior firma,</Text>
            </View>
            <View style={styles.sectionFirma}>
                <View>
                    
                    <Text>Daniel Cardenas Lozano</Text>
                    <Text>Lider Sena Empresa</Text>
                </View>
                <View>
                    
                    <Text>Natalia Olmos Villarraga</Text>
                    <Text>Lider Talento Humano</Text>
                </View>
            </View>
            <View style={styles.textoFooter}>
                <Text >Elaborado Por: SoftTURUSEEM</Text>
            </View>
        </Page>
    </Document>
);


export default MemorandumPDF
