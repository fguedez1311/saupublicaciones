"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Download, FileText, Eye } from "lucide-react"

interface DataItem {
  id: number
  title: string
  description: string
  format: string
  url: string
}

interface DataTableProps {
  data: DataItem[]
  itemsPerPage?: number
}

export function TablaEstado({ data, itemsPerPage = 5 }: DataTableProps) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(data.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = data.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }

  const getFormatColor = (format: string) => {
    const colors: Record<string, string> = {
      pdf: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
      xls: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      xlsx: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      csv: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
      docx: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
    }
    return colors[format.toLowerCase()] || "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
  }

  return (
    <div className="space-y-6">
      {/* Vista de escritorio - Tabla */}
      <div className="hidden md:block">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Reportes y Documentos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">ID</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Título</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Descripción</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Formato</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((item) => (
                    <tr key={item.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4 text-sm font-mono">{item.id}</td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-foreground">{item.title}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-sm text-muted-foreground max-w-md">{item.description}</div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getFormatColor(item.format)}>{item.format.toUpperCase()}</Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => window.open(item.url, "_blank")}
                            className="h-8"
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            Ver
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => window.open(item.url, "_blank")}
                            className="h-8"
                          >
                            <Download className="h-3 w-3 mr-1" />
                            Descargar
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Vista móvil - Cards */}
      <div className="md:hidden space-y-4">
        {currentData.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-foreground text-balance">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 text-pretty">{item.description}</p>
                </div>
                <Badge className={`ml-2 ${getFormatColor(item.format)}`}>{item.format.toUpperCase()}</Badge>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="text-xs text-muted-foreground font-mono">ID: {item.id}</span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(item.url, "_blank")}
                    className="h-8 text-xs"
                  >
                    <Eye className="h-3 w-3 mr-1" />
                    Ver
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(item.url, "_blank")}
                    className="h-8 text-xs"
                  >
                    <Download className="h-3 w-3 mr-1" />
                    Descargar
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Controles de paginación */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
        <div className="text-sm text-muted-foreground">
          Mostrando {startIndex + 1} a {Math.min(endIndex, data.length)} de {data.length} elementos
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="h-8"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Página anterior</span>
          </Button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              // Mostrar solo algunas páginas en móvil
              const showPage =
                totalPages <= 5 ||
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)

              if (!showPage) {
                // Mostrar puntos suspensivos
                if (page === currentPage - 2 || page === currentPage + 2) {
                  return (
                    <span key={page} className="px-2 text-muted-foreground">
                      ...
                    </span>
                  )
                }
                return null
              }

              return (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => goToPage(page)}
                  className="h-8 w-8"
                >
                  {page}
                </Button>
              )
            })}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="h-8"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Página siguiente</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
