import type {Project} from './types/project.ts'
import type { Link } from './types/link.ts'

interface AbdihakimBurale {
    name: string,
    title: string,
    city: string,
    country: string,
    links: Link[],
    projects: Project[],
}