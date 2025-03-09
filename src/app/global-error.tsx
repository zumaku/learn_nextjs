"use client"

import "./globals.css"

export default function GlobalError() {
    return (
        <html>
            <body>
                <div>
                    <h1 className="text-2xl font-bold mb-4">Something went Wrong!</h1>
                    <button
                        onClick={() => {
                            window.location.reload()
                        }}
                        className="bg-blue-500 text-white font-bold p-2"
                    >
                        Refresh
                    </button>
                </div>
            </body>
        </html>
    );
}