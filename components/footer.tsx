export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-16 sm:mt-24 py-8">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <p className="text-sm text-muted-foreground text-center">
          © {currentYear} David O&apos;Sullivan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

