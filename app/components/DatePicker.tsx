"use client"

import * as React from "react"
import { Calendar } from "../../components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover"
import { Button } from "../../components/ui/button"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

interface DatePickerProps {
  date: Date | undefined
  setDate: (date: Date | undefined) => void
  open?: boolean
  setOpen?: (open: boolean) => void
}

export function DatePicker({ date, setDate, open, setOpen }: DatePickerProps) {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={"w-[200px] justify-start text-left font-normal" + (!date ? " text-muted-foreground" : "")}
        >
          {date && !isNaN(date.getTime()) ? format(date, "dd/MM/yyyy", { locale: ptBR }) : "Escolha a data"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          captionLayout="dropdown"
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  )
}
