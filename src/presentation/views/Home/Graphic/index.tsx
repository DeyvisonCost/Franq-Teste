import React from 'react'

import { Label, Pie, PieChart } from 'recharts'

import { Card, CardContent } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { ModalContent } from '@/presentation/views/Home/home.types'

export const Graphic = ({ data }: { data: ModalContent }) => {
  const chartData = [
    { variation: 'negative', visitors: 275, fill: 'var(--color-chrome)' },
    { variation: 'positive', visitors: 200, fill: 'var(--color-safari)' },
  ]

  const chartConfig = {
    chrome: {
      label: 'Chrome',
      color: `${data?.variation >= 0 ? 'hsl(var(--chart-2))' : 'transparent'}`,
    },
    safari: {
      label: 'Safari',
      color: `${data?.variation < 0 ? 'hsl(var(--chart-1))' : 'transparent'}`,
    },
  } satisfies ChartConfig

  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" nameKey="variation" innerRadius={60} strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          {data?.variation || 'N/A'}{' '}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          variation
                        </tspan>
                      </text>
                    )
                  }
                  return null
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
