import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "../../layout/Container";
// Products data inline — no import path issues
const products = [
  { id: 1, name: "EX DISPLAY : MSI Pro 16 Flex-036AU", src: "/img1.png", oldPrice: "$599.00", price: "$499.00" },
  { id: 2, name: "EX DISPLAY : MSI Pro 16 Flex-036AU", src: "/img2.png", oldPrice: "$699.00", price: "$499.00" },
  { id: 3, name: "EX DISPLAY : MSI Pro 16 Flex-036AU", src: "/img3.png", oldPrice: "$799.00", price: "$499.00" },
  { id: 4, name: "EX DISPLAY : MSI Pro 16 Flex-036AU", src: "/img4.png", oldPrice: "$899.00", price: "$499.00" },
  { id: 5, name: "EX DISPLAY : MSI Pro 16 Flex-036AU", src: "/img1.png", oldPrice: "$599.00", price: "$499.00" },
];

// Icon components (inline to avoid import issues)
const StarIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#D4AF37" : "none"} stroke="#D4AF37" strokeWidth="1.5">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

const HeartIcon = ({ filled }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? "#D4AF37" : "none"} stroke={filled ? "#D4AF37" : "currentColor"} strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const ShareIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9,18 15,12 9,6"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const TruckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="1" y="3" width="15" height="13"/><polygon points="16,8 20,8 23,11 23,16 16,16 16,8"/>
    <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

const RotateIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="1,4 1,10 7,10"/><polyline points="23,20 23,14 17,14"/>
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2.5">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
);

const MinusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const ZoomIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
  </svg>
);

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id)) || products[0];

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [zoom, setZoom] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const images = [product.src, product.src, product.src, product.src];
  const colors = ["#1a1a2e", "#2d4a7a", "#7a2d2d", "#2d7a4a"];
  const colorNames = ["Midnight Black", "Royal Blue", "Crimson", "Emerald"];
  const storageOptions = ["256GB", "512GB", "1TB"];

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const discount = Math.round(
    ((parseFloat(product.oldPrice.replace("$", "")) - parseFloat(product.price.replace("$", ""))) /
      parseFloat(product.oldPrice.replace("$", ""))) * 100
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --gold: #D4AF37;
          --gold-light: #F0D060;
          --gold-dim: rgba(212,175,55,0.12);
          --obsidian: #0a0a0f;
          --charcoal: #12121a;
          --surface: #1a1a26;
          --surface-2: #222234;
          --border: rgba(212,175,55,0.15);
          --text-primary: #f0ede8;
          --text-secondary: #a09880;
          --text-muted: #5a5470;
        }

        .pd-page * { box-sizing: border-box; margin: 0; padding: 0; }

        .pd-page {
          font-family: 'Outfit', sans-serif;
          background: var(--obsidian);
          color: var(--text-primary);
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        /* Ambient background */
        .pd-page::before {
          content: '';
          position: fixed;
          top: -30%;
          right: -20%;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        .pd-page::after {
          content: '';
          position: fixed;
          bottom: -20%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(80,60,180,0.05) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        /* Breadcrumb */
        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 24px 0;
          font-size: 12px;
          color: var(--text-muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .breadcrumb a { color: var(--text-muted); text-decoration: none; transition: color 0.2s; }
        .breadcrumb a:hover { color: var(--gold); }
        .breadcrumb .current { color: var(--gold); }

        /* Main layout */
        .pd-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 900px) {
          .pd-layout { grid-template-columns: 1fr; gap: 40px; }
        }

        /* Gallery */
        .gallery-section {}
        .main-image-wrap {
          position: relative;
          background: var(--charcoal);
          border: 1px solid var(--border);
          border-radius: 4px;
          overflow: hidden;
          aspect-ratio: 1;
          cursor: zoom-in;
        }
        .main-image-wrap.zoomed { cursor: zoom-out; }

        .main-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 40px;
          transition: transform 0.1s ease;
          display: block;
        }
        .main-image-wrap.zoomed img {
          transform: scale(2.2);
          transform-origin: var(--ox, 50%) var(--oy, 50%);
          transition: none;
        }

        .discount-pill {
          position: absolute;
          top: 20px;
          left: 20px;
          background: var(--gold);
          color: #000;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 5px 12px;
          border-radius: 2px;
          text-transform: uppercase;
        }

        .zoom-btn {
          position: absolute;
          bottom: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s;
        }
        .zoom-btn:hover { background: var(--gold-dim); color: var(--gold); }

        .wishlist-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(10,10,15,0.6);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s;
          color: var(--text-secondary);
        }
        .wishlist-btn:hover { border-color: var(--gold); color: var(--gold); transform: scale(1.1); }
        .wishlist-btn.active { border-color: var(--gold); background: var(--gold-dim); }

        .thumbnails {
          display: flex;
          gap: 10px;
          margin-top: 14px;
        }
        .thumb {
          flex: 1;
          aspect-ratio: 1;
          background: var(--charcoal);
          border: 1px solid var(--border);
          border-radius: 3px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.2s;
          padding: 8px;
        }
        .thumb img { width: 100%; height: 100%; object-fit: contain; }
        .thumb:hover { border-color: rgba(212,175,55,0.5); }
        .thumb.active { border-color: var(--gold); box-shadow: 0 0 0 1px var(--gold); }

        /* Info section */
        .info-section {}

        .category-tag {
          display: inline-block;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          border: 1px solid var(--border);
          padding: 4px 12px;
          border-radius: 2px;
          margin-bottom: 16px;
        }

        .product-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 400;
          line-height: 1.2;
          color: var(--text-primary);
          margin-bottom: 16px;
          letter-spacing: 0.01em;
        }

        .rating-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .stars { display: flex; gap: 2px; }
        .rating-count { font-size: 12px; color: var(--text-muted); }
        .rating-sep { color: var(--border); }
        .in-stock {
          font-size: 11px;
          color: #4CAF50;
          display: flex;
          align-items: center;
          gap: 5px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .in-stock-dot { width: 6px; height: 6px; border-radius: 50%; background: #4CAF50; animation: pulse-green 2s infinite; }
        @keyframes pulse-green { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }

        /* Price */
        .price-block {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 20px 24px;
          margin-bottom: 28px;
          position: relative;
          overflow: hidden;
        }
        .price-block::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, var(--gold), transparent);
        }
        .price-current {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px;
          font-weight: 500;
          color: var(--gold);
          line-height: 1;
        }
        .price-old {
          font-size: 18px;
          color: var(--text-muted);
          text-decoration: line-through;
          margin-left: 12px;
        }
        .price-save {
          font-size: 12px;
          color: #4CAF50;
          margin-top: 6px;
          letter-spacing: 0.04em;
        }
        .price-row { display: flex; align-items: baseline; gap: 4px; }

        /* Divider */
        .gold-divider {
          height: 1px;
          background: linear-gradient(to right, var(--gold), transparent);
          margin: 24px 0;
          opacity: 0.3;
        }

        /* Options */
        .option-label {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .option-label span { color: var(--text-primary); font-weight: 500; font-size: 13px; letter-spacing: 0; text-transform: none; }

        .color-options {
          display: flex;
          gap: 10px;
          margin-bottom: 22px;
        }
        .color-swatch {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s;
          border: 2px solid transparent;
          position: relative;
        }
        .color-swatch::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1px solid transparent;
          transition: border-color 0.2s;
        }
        .color-swatch.active::after { border-color: var(--gold); }
        .color-swatch:hover { transform: scale(1.1); }

        .storage-options {
          display: flex;
          gap: 10px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .storage-btn {
          padding: 8px 20px;
          border: 1px solid var(--border);
          border-radius: 3px;
          background: transparent;
          color: var(--text-secondary);
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.03em;
        }
        .storage-btn:hover { border-color: rgba(212,175,55,0.5); color: var(--text-primary); }
        .storage-btn.active {
          background: var(--gold-dim);
          border-color: var(--gold);
          color: var(--gold);
        }

        /* Quantity */
        .quantity-row {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 28px;
        }
        .qty-control {
          display: flex;
          align-items: center;
          border: 1px solid var(--border);
          border-radius: 3px;
          overflow: hidden;
          background: var(--surface);
        }
        .qty-btn {
          width: 40px;
          height: 44px;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
        }
        .qty-btn:hover { background: var(--gold-dim); color: var(--gold); }
        .qty-value {
          width: 50px;
          text-align: center;
          font-size: 15px;
          font-weight: 500;
          color: var(--text-primary);
          border-left: 1px solid var(--border);
          border-right: 1px solid var(--border);
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* CTA Buttons */
        .cta-group {
          display: flex;
          gap: 12px;
          margin-bottom: 28px;
        }

        .btn-cart {
          flex: 1;
          height: 52px;
          background: var(--gold);
          color: #000;
          border: none;
          border-radius: 3px;
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.25s;
          position: relative;
          overflow: hidden;
        }
        .btn-cart::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent);
          transition: left 0.5s;
        }
        .btn-cart:hover::before { left: 150%; }
        .btn-cart:hover { background: var(--gold-light); transform: translateY(-1px); box-shadow: 0 8px 30px rgba(212,175,55,0.3); }
        .btn-cart:active { transform: translateY(0); }
        .btn-cart.added { background: #2d7a4a; color: #fff; }

        .btn-buynow {
          flex: 1;
          height: 52px;
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border);
          border-radius: 3px;
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s;
        }
        .btn-buynow:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: var(--gold-dim);
        }

        .btn-share {
          width: 52px;
          height: 52px;
          border: 1px solid var(--border);
          border-radius: 3px;
          background: transparent;
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s;
          flex-shrink: 0;
        }
        .btn-share:hover { border-color: var(--gold); color: var(--gold); }

        /* Perks */
        .perks {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
          margin-bottom: 28px;
        }
        .perk-item {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 3px;
          padding: 14px 12px;
          text-align: center;
          transition: border-color 0.2s;
        }
        .perk-item:hover { border-color: rgba(212,175,55,0.4); }
        .perk-icon { color: var(--gold); margin-bottom: 6px; display: flex; justify-content: center; }
        .perk-text { font-size: 10px; color: var(--text-muted); letter-spacing: 0.04em; line-height: 1.5; }

        /* Features */
        .features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .feature-check { flex-shrink: 0; margin-top: 2px; }

        /* Tabs */
        .tab-section {
          margin-top: 60px;
          position: relative;
          z-index: 1;
        }
        .tab-header {
          display: flex;
          border-bottom: 1px solid var(--border);
          gap: 0;
          margin-bottom: 36px;
        }
        .tab-btn {
          padding: 14px 28px;
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: 'Outfit', sans-serif;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          transition: color 0.2s;
        }
        .tab-btn::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 2px;
          background: var(--gold);
          transform: scaleX(0);
          transition: transform 0.3s;
        }
        .tab-btn.active { color: var(--gold); }
        .tab-btn.active::after { transform: scaleX(1); }
        .tab-btn:hover { color: var(--text-primary); }

        .tab-content { animation: fadeIn 0.3s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

        .spec-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 4px;
          overflow: hidden;
        }
        .spec-row {
          background: var(--charcoal);
          padding: 14px 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .spec-key { font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--text-muted); }
        .spec-val { font-size: 14px; color: var(--text-primary); font-weight: 400; }

        .review-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 24px;
          margin-bottom: 14px;
        }
        .review-top { display: flex; align-items: center; gap: 14px; margin-bottom: 12px; }
        .review-avatar {
          width: 40px; height: 40px; border-radius: 50%;
          background: var(--gold-dim);
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          color: var(--gold);
        }
        .review-author { font-size: 14px; font-weight: 500; }
        .review-date { font-size: 11px; color: var(--text-muted); margin-top: 2px; }
        .review-text { font-size: 13px; color: var(--text-secondary); line-height: 1.7; }

        .desc-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          line-height: 1.9;
          color: var(--text-secondary);
          max-width: 680px;
        }

        /* Container */
        .pd-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px 80px;
        }

        @media (max-width: 600px) {
          .pd-container { padding: 0 20px 60px; }
          .perks { grid-template-columns: 1fr 1fr; }
          .cta-group { flex-wrap: wrap; }
          .btn-cart, .btn-buynow { flex: 1 0 100%; }
          .btn-share { width: 100%; }
          .spec-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <Container>

        <div className="pd-page">
        <div className="pd-container">

          {/* Breadcrumb */}
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight />
            <Link to="/shop">Electronics</Link>
            <ChevronRight />
            <span className="current">MSI Pro 16</span>
          </nav>

          {/* Main Layout */}
          <div className="pd-layout">

            {/* Gallery */}
            <div className="gallery-section">
              <div
                className={`main-image-wrap ${zoom ? "zoomed" : ""}`}
                onClick={() => setZoom(!zoom)}
                onMouseMove={(e) => {
                  if (zoom) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    e.currentTarget.querySelector("img").style.transformOrigin = `${x}% ${y}%`;
                  }
                }}
              >
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                />

                <div className="discount-pill">−{discount}% OFF</div>

                <button
                  className={`wishlist-btn ${wishlist ? "active" : ""}`}
                  onClick={(e) => { e.stopPropagation(); setWishlist(!wishlist); }}
                >
                  <HeartIcon filled={wishlist} />
                </button>

                <div className="zoom-btn" onClick={(e) => { e.stopPropagation(); setZoom(!zoom); }}>
                  <ZoomIcon />
                </div>
              </div>

              <div className="thumbnails">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className={`thumb ${selectedImage === i ? "active" : ""}`}
                    onClick={() => { setSelectedImage(i); setZoom(false); }}
                  >
                    <img src={img} alt={`View ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="info-section">

              <span className="category-tag">MSI Electronics</span>

              <h1 className="product-title">
                EX Display MSI Pro 16 Flex-036AU All-in-One Computer
              </h1>

              <div className="rating-row">
                <div className="stars">
                  {[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= 4} />)}
                </div>
                <span className="rating-count">4.0 · 128 Reviews</span>
                <span className="rating-sep">|</span>
                <span className="in-stock">
                  <span className="in-stock-dot"></span>
                  In Stock
                </span>
              </div>

              {/* Price */}
              <div className="price-block">
                <div className="price-row">
                  <span className="price-current">{product.price}</span>
                  <span className="price-old">{product.oldPrice}</span>
                </div>
                <p className="price-save">
                  ✦ You save ${(parseFloat(product.oldPrice.replace("$","")) - parseFloat(product.price.replace("$",""))).toFixed(2)} ({discount}% discount)
                </p>
              </div>

              <div className="gold-divider"></div>

              {/* Color */}
              <div style={{ marginBottom: 22 }}>
                <div className="option-label">
                  Color <span>{colorNames[selectedColor]}</span>
                </div>
                <div className="color-options">
                  {colors.map((c, i) => (
                    <div
                      key={i}
                      className={`color-swatch ${selectedColor === i ? "active" : ""}`}
                      style={{ background: c }}
                      onClick={() => setSelectedColor(i)}
                      title={colorNames[i]}
                    />
                  ))}
                </div>
              </div>

              {/* Storage */}
              <div style={{ marginBottom: 28 }}>
                <div className="option-label">
                  Storage <span>{storageOptions[selectedStorage]}</span>
                </div>
                <div className="storage-options">
                  {storageOptions.map((s, i) => (
                    <button
                      key={i}
                      className={`storage-btn ${selectedStorage === i ? "active" : ""}`}
                      onClick={() => setSelectedStorage(i)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="quantity-row">
                <div className="option-label" style={{ marginBottom: 0 }}>Quantity</div>
                <div className="qty-control">
                  <button className="qty-btn" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                    <MinusIcon />
                  </button>
                  <div className="qty-value">{quantity}</div>
                  <button className="qty-btn" onClick={() => setQuantity(q => q + 1)}>
                    <PlusIcon />
                  </button>
                </div>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Max 10 units</span>
              </div>

              {/* CTA */}
              <div className="cta-group">
                <button
                  className={`btn-cart ${addedToCart ? "added" : ""}`}
                  onClick={handleAddToCart}
                >
                  {addedToCart ? (
                    <><CheckIcon />Added to Cart</>
                  ) : (
                    <><CartIcon />Add to Cart</>
                  )}
                </button>
                <button className="btn-buynow">Buy Now</button>
                <button className="btn-share"><ShareIcon /></button>
              </div>

              {/* Perks */}
              <div className="perks">
                <div className="perk-item">
                  <div className="perk-icon"><TruckIcon /></div>
                  <div className="perk-text">Free Express<br/>Delivery</div>
                </div>
                <div className="perk-item">
                  <div className="perk-icon"><ShieldIcon /></div>
                  <div className="perk-text">2-Year<br/>Warranty</div>
                </div>
                <div className="perk-item">
                  <div className="perk-icon"><RotateIcon /></div>
                  <div className="perk-text">30-Day<br/>Returns</div>
                </div>
              </div>

              {/* Features */}
              <ul className="features-list">
                {[
                  "16-inch Full HD multi-touch display",
                  "Intel Core i5 processor, 8GB DDR4 RAM",
                  "AMD Radeon graphics — smooth visuals",
                  "Wi-Fi 6 & Bluetooth 5.2 connectivity",
                  "Slim profile with premium build quality",
                ].map((f, i) => (
                  <li key={i} className="feature-item">
                    <span className="feature-check"><CheckIcon /></span>
                    {f}
                  </li>
                ))}
              </ul>

            </div>
          </div>

          {/* Tabs */}
          <div className="tab-section">
            <div className="tab-header">
              {["description", "specifications", "reviews"].map(tab => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="tab-content" key={activeTab}>
              {activeTab === "description" && (
                <p className="desc-text">
                  The MSI Pro 16 Flex redefines the all-in-one experience with a stunning 16-inch 
                  Full HD multi-touch display. Engineered for both creative professionals and everyday power users, 
                  it combines a sleek, space-saving design with desktop-grade performance. Whether you're managing 
                  content, editing documents, or exploring creative workflows, the Pro 16 Flex delivers with precision 
                  and elegance. Its premium aluminum chassis, whisper-quiet cooling system, and vibrant display 
                  make this an investment worthy of your workspace.
                </p>
              )}

              {activeTab === "specifications" && (
                <div className="spec-grid">
                  {[
                    ["Display", "16\" Full HD IPS Touch (1920×1080)"],
                    ["Processor", "Intel Core i5-1135G7"],
                    ["Memory", "8GB DDR4 3200MHz"],
                    ["Storage", storageOptions[selectedStorage] + " NVMe SSD"],
                    ["Graphics", "AMD Radeon RX Vega 8"],
                    ["OS", "Windows 11 Home"],
                    ["Connectivity", "Wi-Fi 6, Bluetooth 5.2"],
                    ["Ports", "USB-A × 4, USB-C, HDMI, SD Card"],
                    ["Audio", "Realtek HD Audio, Built-in Mic"],
                    ["Dimensions", "400 × 290 × 55mm · 5.4kg"],
                  ].map(([k, v]) => (
                    <div className="spec-row" key={k}>
                      <span className="spec-key">{k}</span>
                      <span className="spec-val">{v}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  {[
                    { name: "Aryan M.", initial: "A", date: "March 2025", rating: 5, text: "Absolutely stunning machine. The display is crystal clear and the build quality feels premium through and through. Very happy with my purchase." },
                    { name: "Sarah K.", initial: "S", date: "January 2025", rating: 4, text: "Great all-in-one. Setup was seamless and performance is solid for daily tasks and light creative work. Would recommend." },
                    { name: "James T.", initial: "J", date: "December 2024", rating: 4, text: "Excellent value for money. The touch screen is responsive and the design looks great on my desk. Shipping was fast." },
                  ].map((r, i) => (
                    <div className="review-card" key={i}>
                      <div className="review-top">
                        <div className="review-avatar">{r.initial}</div>
                        <div>
                          <div className="review-author">{r.name}</div>
                          <div className="review-date">{r.date}</div>
                        </div>
                        <div className="stars" style={{ marginLeft: "auto" }}>
                          {[1,2,3,4,5].map(s => <StarIcon key={s} filled={s <= r.rating} />)}
                        </div>
                      </div>
                      <p className="review-text">{r.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
      </Container>

    </>
  );
};

export default ProductDetails;
