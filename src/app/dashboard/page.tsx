import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { CreditCard, DollarSign, TrendingUp, AlertCircle, Plus, Eye } from 'lucide-react'
import Link from 'next/link'

export default function Dashboard() {
  // Mock data - in a real app, this would come from an API
  const creditCards = [
    { id: 1, name: 'Chase Freedom', balance: 8500, interestRate: 24.99, minimumPayment: 170 },
    { id: 2, name: 'Capital One Platinum', balance: 3200, interestRate: 26.99, minimumPayment: 96 },
    { id: 3, name: 'Discover Cashback', balance: 1200, interestRate: 21.99, minimumPayment: 36 },
  ]

  const totalDebt = creditCards.reduce((sum, card) => sum + card.balance, 0)
  const totalMinimumPayments = creditCards.reduce((sum, card) => sum + card.minimumPayment, 0)
  const averageInterestRate = creditCards.reduce((sum, card) => sum + card.interestRate, 0) / creditCards.length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <CreditCard className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">FinClear</span>
            </div>
            <nav className="flex space-x-6">
              <Link href="/dashboard" className="text-blue-600 font-medium">Dashboard</Link>
              <Link href="/cards" className="text-gray-600 hover:text-blue-600">Cards</Link>
              <Link href="/loans" className="text-gray-600 hover:text-blue-600">Loans</Link>
              <Link href="/profile" className="text-gray-600 hover:text-blue-600">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Here's your financial overview</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-red-100 rounded-lg">
                  <DollarSign className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Debt</p>
                  <p className="text-2xl font-bold text-gray-900">${totalDebt.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg Interest Rate</p>
                  <p className="text-2xl font-bold text-gray-900">{averageInterestRate.toFixed(1)}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Cards</p>
                  <p className="text-2xl font-bold text-gray-900">{creditCards.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Monthly Minimum</p>
                  <p className="text-2xl font-bold text-gray-900">${totalMinimumPayments}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Plus className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Add New Card</h3>
              <p className="text-gray-600 mb-4">Connect another credit card to track</p>
              <Link href="/cards/add">
                <Button>Add Card</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Apply for Loan</h3>
              <p className="text-gray-600 mb-4">Get a lower rate loan to consolidate debt</p>
              <Link href="/loans/apply">
                <Button>Apply Now</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Eye className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">View Reports</h3>
              <p className="text-gray-600 mb-4">See your debt payoff progress</p>
              <Link href="/reports">
                <Button variant="outline">View Reports</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Credit Cards List */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900">Your Credit Cards</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {creditCards.map((card) => (
                <div key={card.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <CreditCard className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">{card.name}</h3>
                      <p className="text-sm text-gray-600">Balance: ${card.balance.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{card.interestRate}% APR</p>
                    <p className="text-sm text-gray-600">Min: ${card.minimumPayment}</p>
                  </div>
                  <Link href={`/cards/${card.id}`}>
                    <Button variant="outline" size="sm">View Details</Button>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alert Section */}
        <Card className="mt-8 border-orange-200 bg-orange-50">
          <CardContent className="p-6">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-orange-600 mt-0.5" />
              <div className="ml-3">
                <h3 className="font-medium text-orange-900">Potential Savings Alert</h3>
                <p className="text-orange-800 mt-1">
                  You could save up to $2,340 in interest by consolidating your debt with a 12% APR loan.
                  <Link href="/loans/apply" className="ml-2 font-medium underline">Apply now</Link>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}