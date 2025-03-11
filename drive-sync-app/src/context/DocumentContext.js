import React, { createContext, useState, useEffect } from "react";

// ✅ Create a Context
export const DocumentContext = createContext();

const DocumentProvider = ({ children }) => {
  // ✅ Sample Document Data (Google Drive, OneDrive, Dropbox)
  const [documents, setDocuments] = useState(
    Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      name: `File ${index + 1}`,
      type: index % 3 === 0 ? "folder" : index % 3 === 1 ? "file" : "sheet",
      access: index % 2 === 0 ? "Team Alpha" : "Team Beta",
      path: `Folder ${Math.ceil(index / 10)} > File ${index + 1}`,
      source: index % 3 === 0 ? "Google Drive" : index % 3 === 1 ? "OneDrive" : "Dropbox",
      linked: index % 5 !== 0, // ✅ Unlinked if index is a multiple of 5
      repetitive: index % 7 === 0, // ✅ Repetitive if index is a multiple of 7
      lastAccessed: index < 10, // ✅ Mark first 10 as recently accessed
    }))
  );

  // ✅ Calculate Summary Stats for Home.js
  const [stats, setStats] = useState({
    untitledDocs: 0,
    unlinkedItems: 0,
    repetitiveItems: 0,
    recentAccess: 0,
  });

  useEffect(() => {
    // ✅ Update stats dynamically
    setStats({
      untitledDocs: documents.filter((doc) => doc.name.includes("Untitled")).length,
      unlinkedItems: documents.filter((doc) => !doc.linked).length,
      repetitiveItems: documents.filter((doc) => doc.repetitive).length,
      recentAccess: documents.filter((doc) => doc.lastAccessed).length,
    });
  }, [documents]);

  return (
    <DocumentContext.Provider value={{ documents, setDocuments, stats }}>
      {children}
    </DocumentContext.Provider>
  );
};

export default DocumentProvider;
