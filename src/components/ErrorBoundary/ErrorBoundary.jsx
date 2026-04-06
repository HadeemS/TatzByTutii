import { Component } from 'react'
import './ErrorBoundary.css'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Render error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1 className="error-boundary__title">Something went wrong</h1>
          <p className="error-boundary__text">
            The page hit an error while loading. Open the browser console (F12 → Console) for the technical
            message, or try a hard refresh (Ctrl+Shift+R).
          </p>
          {this.state.error ? (
            <pre className="error-boundary__pre">{this.state.error.toString()}</pre>
          ) : null}
        </div>
      )
    }
    return this.props.children
  }
}
