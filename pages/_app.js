import '../styles/global.css';
import Layout from '../components/layout/layout';
import Head from 'next/head';
function Vicatia({ Component, PageProps }){

    return (<Layout><Component {...PageProps}/></Layout>)
}

export default Vicatia;