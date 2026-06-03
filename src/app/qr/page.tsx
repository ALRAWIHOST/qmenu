"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { supabase } from "@/lib/supabase";

export default function QRPage() {
  const [qrImage, setQrImage] = useState("");
  const [menuUrl, setMenuUrl] = useState("");

  useEffect(() => {
    const generateQR = async () => {
      const { data: restaurants } = await supabase
        .from("restaurants")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1);

      const restaurant = restaurants?.[0];

      if (!restaurant) return;

      const url = `${window.location.origin}/s/${restaurant.slug}`;
      setMenuUrl(url);

      const qr = await QRCode.toDataURL(url, {
        width: 300,
        margin: 2,
      });

      setQrImage(qr);
    };

    generateQR();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white border rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">QR-Code</h1>

        <p className="text-gray-600 mb-6">
          Scannen Sie diesen QR-Code, um die digitale Speisekarte zu öffnen.
        </p>

        {qrImage ? (
          <img
            src={qrImage}
            alt="QR Code"
            className="mx-auto mb-6 h-72 w-72"
          />
        ) : (
          <div className="mx-auto mb-6 flex h-72 w-72 items-center justify-center border rounded-xl">
            QR wird geladen...
          </div>
        )}

        <p className="text-sm text-gray-500 mb-6 break-all">
          {menuUrl}
        </p>

        {qrImage && (
          <a
            href={qrImage}
            download="qmenu-qr-code.png"
            className="block w-full bg-black text-white py-3 rounded-lg"
          >
            QR-Code herunterladen
          </a>
        )}
      </div>
    </main>
  );
}