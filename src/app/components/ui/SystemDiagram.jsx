// Data-driven architecture diagram. Renders a simple, honest request-path
// flow from a project's `architecture` field. Add a diagram to any project by
// providing `architecture`; nothing here is hand-drawn per project.
//
// Shape:
//   architecture: {
//     caption?: string,
//     flow: [{ label: string, sub?: string }, ...],
//     note?: string,
//   }

const SystemDiagram = ({ architecture }) => {
  if (!architecture?.flow?.length) return null;

  const { caption, flow, note } = architecture;

  return (
    <figure className="rounded-lg border border-rule bg-surface p-5 md:p-6">
      <figcaption className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        {caption || "Architecture"}
      </figcaption>

      <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-stretch md:gap-0">
        {flow.map((node, i) => (
          <div key={node.label} className="flex flex-col md:flex-1 md:flex-row md:items-stretch">
            <div className="flex flex-1 flex-col justify-center rounded-md border border-rule bg-background px-4 py-3">
              <span className="font-mono text-[10px] text-muted">{`0${i + 1}`}</span>
              <span className="mt-1 text-sm font-medium text-foreground">{node.label}</span>
              {node.sub ? (
                <span className="mt-0.5 font-mono text-[11px] text-muted">{node.sub}</span>
              ) : null}
            </div>

            {i < flow.length - 1 ? (
              <div
                aria-hidden="true"
                className="flex items-center justify-center py-1 text-muted md:px-2 md:py-0"
              >
                {/* down arrow on mobile, right arrow on desktop */}
                <span className="md:hidden">↓</span>
                <span className="hidden md:inline">→</span>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {note ? (
        <p className="mt-5 border-t border-rule pt-4 font-mono text-[11px] leading-relaxed text-muted">
          {note}
        </p>
      ) : null}
    </figure>
  );
};

export default SystemDiagram;
