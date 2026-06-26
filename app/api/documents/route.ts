import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { devisId } = await request.json()

    // Simuler la sauvegarde du document
    // Dans une vraie application, vous enregistreriez dans Supabase

    return NextResponse.json({
      success: true,
      message: 'Document sauvegardé avec succès',
      documentId: `doc_${Date.now()}`,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la sauvegarde' },
      { status: 500 }
    )
  }
}
