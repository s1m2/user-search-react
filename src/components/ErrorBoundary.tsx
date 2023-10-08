import React from "react";

export class ErrorBoundary extends React.Component<{ fallBack: string, children: React.ReactNode }, { hasError: boolean }> {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render() { 
    if (this.state.hasError) {
      return this.props.fallBack;
    }

    return this.props.children;
  }

}