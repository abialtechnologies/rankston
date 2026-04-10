/**
 * Admin Layout — No public navbar/footer, dark admin-only UI
 */

export const metadata = {
  title: 'Admin Dashboard | Rankston',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen" style={{ background: '#0a0f1a' }}>
      {children}
    </div>
  );
}
