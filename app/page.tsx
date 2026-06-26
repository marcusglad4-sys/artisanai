'use client'

import Link from 'next/link'
import { ArrowRight, Zap, FileText, MessageSquare } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">🎨 ArtisanAI</h1>
          <div className="space-x-4">
            <Link href="/auth/login" className="text-gray-600 hover:text-primary">
              Connexion
            </Link>
            <Link href="/auth/signup" className="btn-primary">
              S'inscrire
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-white text-center">
        <h1 className="text-5xl font-bold mb-6">L'IA pour votre métier d'artisan</h1>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Créez des devis professionnels, gérez vos factures et répondez à vos clients avec l'aide de l'IA.
        </p>
        <div className="space-x-4">
          <Link href="/auth/signup">
            <button className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg inline-flex items-center space-x-2 transition">
              <span>Commencer gratuitement</span>
              <ArrowRight size={20} />
            </button>
          </Link>
          <button className="border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition">
            En savoir plus
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <FileText className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-dark mb-3">Devis en quelques secondes</h3>
            <p className="text-gray-600 mb-4">
              Générez des devis professionnels et personnalisés en utilisant l'intelligence artificielle.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Format professionnel</li>
              <li>✓ Tarification automatique</li>
              <li>✓ Envoi par email</li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition">
            <div className="bg-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <FileText className="text-secondary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-dark mb-3">Factures PDF</h3>
            <p className="text-gray-600 mb-4">
              Convertissez vos devis en factures et générez des fichiers PDF pour vos clients.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Génération automatique</li>
              <li>✓ Numérotation intelligente</li>
              <li>✓ Téléchargement facile</li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition">
            <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="text-accent" size={32} />
            </div>
            <h3 className="text-xl font-bold text-dark mb-3">Assistant IA</h3>
            <p className="text-gray-600 mb-4">
              Obtenez de l'aide instantanée pour rédiger des réponses professionnelles à vos clients.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Réponses personnalisées</li>
              <li>✓ Disponible 24/7</li>
              <li>✓ Conseils commerciaux</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-dark text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Prêt à transformer votre métier?</h2>
          <p className="text-lg mb-8 opacity-90">
            Rejoignez des centaines d'artisans qui utilisent ArtisanAI pour gagner du temps.
          </p>
          <Link href="/auth/signup">
            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg flex items-center space-x-2 mx-auto transition">
              <span>Créer un compte gratuit</span>
              <Zap size={20} />
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-600">
          <p>© 2024 ArtisanAI. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
