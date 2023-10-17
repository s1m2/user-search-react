import React from "react";

type Props = {
  fallBack: string;
  children: React.ReactNode
}

export class ErrorBoundary extends React.Component<{ fallBack: string, children: React.ReactNode }, { hasError: boolean }> {
  constructor(props:Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
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