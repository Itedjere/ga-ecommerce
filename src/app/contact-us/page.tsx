"use client";
import Image from "next/image";
import styles from "../page.module.css";
import { useEffect } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";

export default function ContactUs() {
  useEffect(() => {
    sendGTMEvent({
      event: "view_item_list",
      ecommerce: {
        item_list_id: "related_products",
        item_list_name: "Related products",
        items: [
          {
            item_id: "SKU_12345",
            item_name: "Stan and Friends Tee",
            affiliation: "Google Merchandise Store",
            coupon: "SUMMER_FUN",
            discount: 2.22,
            index: 0,
            item_brand: "Google",
            item_category: "Apparel",
            item_category2: "Adult",
            item_category3: "Shirts",
            item_category4: "Crew",
            item_category5: "Short sleeve",
            item_list_id: "related_products",
            item_list_name: "Related Products",
            item_variant: "green",
            location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
            price: 10.03,
            quantity: 3,
          },
          {
            item_id: "SKU_12346",
            item_name: "Google Grey Women's Tee",
            affiliation: "Google Merchandise Store",
            coupon: "SUMMER_FUN",
            discount: 3.33,
            index: 1,
            item_brand: "Google",
            item_category: "Apparel",
            item_category2: "Adult",
            item_category3: "Shirts",
            item_category4: "Crew",
            item_category5: "Short sleeve",
            item_list_id: "related_products",
            item_list_name: "Related Products",
            item_variant: "gray",
            location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
            price: 21.01,
            promotion_id: "P_12345",
            promotion_name: "Summer Sale",
            quantity: 2,
          },
        ],
      },
    });
  }, []);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            This is the <code>src/app/about.tsx</code>.
          </li>
          <li>Get to know more about our company.</li>
        </ol>

        <div className={styles.ctas}>
          <Link className={styles.primary} href="/home">
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Home Page
          </Link>
          <Link href="/about" className={styles.secondary}>
            About Us Page
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
