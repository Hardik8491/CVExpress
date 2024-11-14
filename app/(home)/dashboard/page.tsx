"use client"
import React from "react"
import { PlusCircle, Trash2 } from 'lucide-react'
import AddResume from "../_components/AddResume"
import ResumeList from "../_components/ResumeList"
import TrashListBox from "../_components/TrashListBox"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "react-simple-wysiwyg"

export default function DashboardPage() {
  return (
    <div className=" mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-bold">
                Your Resume Hub
              </CardTitle>
              <CardDescription className="mt-2 text-lg">
                Craft professional resumes with AI-powered tools and expert
                templates
              </CardDescription>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <PlusCircle className="mr-2 h-4 w-4" />
                New Resume
              </Button>
              <TrashListBox />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* <Separator className="my-6" /> */}
          <hr />
          <h2 className="mb-4 text-2xl font-semibold">Your Resumes</h2>
          <div className="grid gap-6 sm:grid-cols-4 lg:grid-cols-6">
            <AddResume />
            <ResumeList />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}