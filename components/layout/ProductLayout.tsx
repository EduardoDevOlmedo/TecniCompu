import Head from "next/head";
import React from "react";
import { Navbar } from "../Navbar"
import { ProductNav } from "./ProductNavbar";

interface Props {
    title: string;
    children: JSX.Element[] | JSX.Element;
}

const ProductLayout: React.FC<Props> = ({children, title}) => {
  return (
    <>
         <Head>
                <title>{title || "TecniCompu"}</title>
                <meta name="author" content="Eduardo olmedo"></meta>
                <meta name="description1" content="Info about the PC'S"></meta>
                <meta name="keywords" content={`${title}, PC, PC'S`}></meta>

                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content="Página oficial de tecniCompu" />
            </Head>
        <ProductNav />
            {
                children
            }
    </>
  )
}

export default ProductLayout