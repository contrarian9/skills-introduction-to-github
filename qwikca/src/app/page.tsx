import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to QwikCA Platform
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            A comprehensive platform for Chartered Accountants
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Task Management</h3>
              <p className="mt-2 text-sm text-gray-500">Manage client tasks, deadlines, and dependencies efficiently.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Document Vault</h3>
              <p className="mt-2 text-sm text-gray-500">Securely store and share documents with clients.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Client CRM</h3>
              <p className="mt-2 text-sm text-gray-500">Maintain client records, credentials, and communication history.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Compliance Tracking</h3>
              <p className="mt-2 text-sm text-gray-500">Automated reminders for GST, income tax, and other compliances.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
