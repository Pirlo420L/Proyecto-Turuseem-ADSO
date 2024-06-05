// import React from 'react';
// import ReactDOM from 'react-dom';
// import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: { flexDirection: 'row', backgroundColor: '#E4E4E4' },
//   section: { margin: 10, padding: 10, flexGrow: 1 }
// });

// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );

// const App = () => (
//   <div>
//     <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
//       {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
//     </PDFDownloadLink>
//   </div>
// );

// export default App
