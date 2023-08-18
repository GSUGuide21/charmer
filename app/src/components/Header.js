import React from "react";
import "./Header.css";

export default function Header({ children }) {
    return (
        <header className="charmer-header" id="charmer-header">
            <h1 className="charmer-title" id="charmer-title">Charmer</h1>
            {children}
        </header>
    );
}