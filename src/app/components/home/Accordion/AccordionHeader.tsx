export default function AccordionHeader() {
  return (
    <div className="text-center mb-10">
      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 mb-4">
        FAQ
      </span>
      <h2 className="text-2xl md:text-4xl font-medium text-foreground">
        Frequently asked questions
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Everything you need to know in one place
      </p>
    </div>
  );
}